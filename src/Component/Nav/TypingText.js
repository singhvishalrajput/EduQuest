import React, { useEffect, useState } from 'react';
import './TypingText.css';

const TypingText = () => {
    const [dynamicText, setDynamicText] = useState('');
    const [words] = useState(["STUDY MATERIALS", "COURSE MATERIALS", "EDUCATIONAL RESOURCES", "EVERYTHING"]);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeEffectInterval = setInterval(() => {
            const currentWord = words[wordIndex];
            const currentChar = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);

            setDynamicText(currentChar);

            if (!isDeleting && charIndex === currentWord.length) {
                setIsDeleting(true);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }

            setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
        }, 100); // Adjust animation speed here

        return () => clearInterval(typeEffectInterval);
    }, [charIndex, isDeleting, wordIndex, words]);

    return (
        <h5>
            We Offer Services Pertaining to <span className="stop-blinking typeText">{dynamicText}</span>
        </h5>
    );
};

export default TypingText;
