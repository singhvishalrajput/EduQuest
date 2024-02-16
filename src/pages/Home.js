import headimg from '../Assets/headimg.png'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import TypingText from '../Component/Nav/TypingText';

const Home = () => {
    return (  

        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <h5><TypingText /></h5>
                        
                        <h3>Effortless Question Creation and Personalized Feedback with EduQuest.</h3>
                        <button><a href="read">Summarize Notes</a></button>
                        <button><a href="read">Generate Questions</a></button>
                        <button><a href="read">Prepare for Interview</a></button>
                        
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className='header-box'>
                        <img src={headimg} alt="" />
                        <FontAwesomeIcon icon={faSquare}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}
 
export default Home;