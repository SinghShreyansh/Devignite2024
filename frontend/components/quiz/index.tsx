// components/Quiz.js
import { optimizeImage } from 'next/dist/server/image-optimizer';
import React from 'react';

const Quiz = ({ index, question, options }) => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{question}</h2>
      <div className="space-y-2">

        <div key= {index}>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value={options.A}
                className="form-radio"
              />
              <span>{options.A}</span>
            </label>
          </div>


      <div key={index}>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value={options.B}
                className="form-radio"
              />
              <span>{options.B}</span>
            </label>
          </div>

        <div key={index}>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value={options.C}
                className="form-radio"
              />
              <span>{options.C}</span>
            </label>

        </div>

        <div key={index}>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value={options.D}
                className="form-radio"
              />
              <span>{options.D}</span>
            </label>
          </div>
      </div>

          <div className="mt-4 mb-4">
            {/* <p className="text-lg">
              Correct answer: <span className="font-semibold">{options.response}</span>
            </p> */}
          </div>

    </div>
  );
};

export default Quiz;