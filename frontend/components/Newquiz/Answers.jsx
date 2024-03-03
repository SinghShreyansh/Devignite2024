"use clients"

import React, { useState } from 'react';

const Answers = ({ answers, isAnswered, correct, increaseScore, showButton ,yourAnswer}) => {
    const [classNames, setClassNames] = useState(['', '', '', '']);

    const checkAnswer = (e) => {
        if (!isAnswered) {
            const elem = e.currentTarget;
            const answer = Number(elem.dataset.id);
            const updatedClassNames = [...classNames];


            if (answer === correct) {
                updatedClassNames[answer - 1] = 'right';
                increaseScore();
            } else {
                updatedClassNames[answer - 1] = 'wrong';
            }

            setClassNames(updatedClassNames);
            showButton();
        }
    };

    return (
        <div id="answers">
            <ul>
                <li onClick={checkAnswer} className={classNames[0]} data-id="1"><span>A</span> <p>{answers[0]}</p></li>
                <li onClick={checkAnswer} className={classNames[1]} data-id="2"><span>B</span> <p>{answers[1]}</p></li>
                <li onClick={checkAnswer} className={classNames[2]} data-id="3"><span>C</span> <p>{answers[2]}</p></li>
                <li onClick={checkAnswer} className={classNames[3]} data-id="4"><span>D</span> <p>{answers[3]}</p></li>
            </ul>
        </div>
    );
};

export default Answers;
