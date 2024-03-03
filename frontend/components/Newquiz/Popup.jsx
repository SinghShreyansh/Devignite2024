"use client"

import { useState } from 'react';

const Popup = ({ startQuiz, score, total, style }) => {
    const [time, setTime] = useState('start');
    const [title, setTitle] = useState('Welcome to Quizz');
    const [text, setText] = useState('This is a quiz to analyze your concepts. <br /><br />');
    const [buttonText, setButtonText] = useState('Start the quiz');
    const [yourAnswer, setYourAnswer] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState([]);

    const popupHandle = () => {
        if (time === 'start') {
            setTime('end');
            setTitle('Congratulations!');
            setButtonText('Restart');
            startQuiz();
        } else {
            location.reload(); // restart the application
        }
    };

    const createMarkup = (text) => {
        return { __html: text };
    };

    // Update text when props change
    useState(() => {
        {text === `Start Your Quiz. <br /><br/> ` &&
        setText(`You have completed the quiz. <br /> You got: <strong>${score}</strong> out of <strong>${total}</strong> questions right.<br/><br/> `);
    }
    }, [score, total]);

    return (
        <div className="popup-container" style={style}>
            <div className="container">
                <div className="col-md-8 col-md-offset-2">
                    <div className="popup">
                        <h1>{title}</h1>
                        <p dangerouslySetInnerHTML={createMarkup(text)} />
                        <button className="fancy-btn" onClick={popupHandle}>{buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;

