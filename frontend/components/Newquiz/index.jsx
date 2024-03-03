"use client"

import React, { useState, useEffect } from 'react';
import data from './data';
import Answers from './Answers';
import Popup from './Popup';

const Newquiz = () => {
    const [nr, setNr] = useState(0);
    const [total, setTotal] = useState(data.length);
    const [showButton, setShowButton] = useState(false);
    const [questionAnswered, setQuestionAnswered] = useState(false);
    const [score, setScore] = useState(4);
    const [displayPopup, setDisplayPopup] = useState('flex');
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);
    const [correct, setCorrect] = useState('');


    const pushData = (nr) => {
        setQuestion(data[nr].question);
        setAnswers([data[nr].answers[0], data[nr].answers[1], data[nr].answers[2], data[nr].answers[3]]);
        setCorrect(data[nr].correct);
        setNr(nr + 1);
    }

    useEffect(() => {
        pushData(nr);
    }, []);

    const nextQuestion = () => {
        if (nr === total) {
            setDisplayPopup('flex');
        } else {
            pushData(nr);
            setShowButton(false);
            setQuestionAnswered(false);
        }
    }

    const handleShowButton = () => {
        setShowButton(true);

        setQuestionAnswered(true);
    }

    const handleStartQuiz = () => {
        setDisplayPopup('none');
        setNr(1);
    }

    const handleIncreaseScore = () => {
        setScore(score + 1);
    }

    return (
        <div className="container">
            <Popup style={{ display: displayPopup }} score={score} total={total} startQuiz={handleStartQuiz} />
            <div className="row">
                <div className="col-lg-10 col-lg-offset-1">
                    <div id="question">
                        <h4>Question {nr}/{total}</h4>
                        <p>{question}</p>
                    </div>
                    <Answers answers={answers} correct={correct} showButton={handleShowButton} isAnswered={questionAnswered} increaseScore={handleIncreaseScore}/>
                    <div id="submit">
                        {showButton ? <button className="fancy-btn" onClick={nextQuestion}>{nr === total ? 'Finish quiz' : 'Next question'}</button> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newquiz;

