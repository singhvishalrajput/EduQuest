const express = require('express');
const multer = require('multer');
const path = require('path');
const pdf = require('pdf-parse');
const fs = require('fs');
const natural = require('natural');

const tokenizer = new natural.SentenceTokenizer();

const app = express();
const PORT = process.env.PORT || 3000;

// Function to preprocess the text
function preprocessText(text) {
    // Remove special characters, punctuation, and extra whitespaces
    const cleanedText = text.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').trim();

    // Convert the text to lowercase
    return cleanedText.toLowerCase();
}

// Function to generate questions from text
function generateQuestions(sentences) {
    const questions = [];

    // Iterate through each sentence and generate a question template
    sentences.forEach((sentence) => {
        // Split the sentence into words
        const words = sentence.split(' ');

        // Check if the sentence has enough words to form a question
        if (words.length >= 5) {
            // Create a dynamic question based on the words in the sentence
            const question = `What is the significance of ${words[54]} in the context of ${words[5]}?`;
            const question1 = `What is the importance of ${words[5]}`;
            const question2 = `What has some ${words[43]} ${words[44]} ${words[45]} ${words[46]} ${words[47]} ${words[48]}`;

            // Add the generated question to the array
            questions.push(question);
            questions.push(question1);
            questions.push(question2);
        }
    });

    console.log('Generated Questions:', questions);
    return questions;
}

// Example usage:
const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const generatedQuestions = generateQuestions(tokenizer.tokenize(sampleText));

console.log(generatedQuestions);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('fileUpload'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        // Read the uploaded PDF file and extract text
        const dataBuffer = fs.readFileSync(req.file.path);
        const pdfResult = await pdf(dataBuffer);

        // Check if pdfResult has text property and it is a string
        if (!pdfResult.text || typeof pdfResult.text !== 'string') {
            throw new Error('Text extraction from PDF failed');
        }

        // Preprocess the extracted text
        const cleanedText = preprocessText(pdfResult.text);

        // Tokenize the cleaned text into sentences
        const sentences = tokenizer.tokenize(cleanedText);

        // Generate questions based on the extracted text
        const generatedQuestions = generateQuestions(sentences);

        // Send the preprocessed and tokenized text, along with generated questions, as response
        res.json({
            message: 'Text processed successfully',
            sentences: sentences,
            generatedQuestions: generatedQuestions
        });
    } catch (error) {
        console.error('Error processing text:', error);
        res.status(500).json({ error: 'Failed to process text' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});