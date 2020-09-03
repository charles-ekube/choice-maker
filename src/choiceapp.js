import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
export const Choiceapp = ({ question, optionA, optionB, optionC, optionD, onChange, onSubmit }) => (
    <main>

        <section className="homeSection">
            <form onSubmit={onSubmit}>
                <section className="question">

                    <legend>
                        Question
                    </legend>
                    <div>
                       <input
                        type="text"
                        placeholder="Question"
                        value={question}
                        name="question"
                        onChange={onChange}
                       />
                    </div>

                </section>
                <section className="options">
                    <legend>
                        Options
                    </legend>
                    <div>
                        <input
                            type="text"
                            placeholder="Option A"
                            value={optionA}
                            name="optionA"
                            onChange={onChange}
                        />
                        <input
                            type="text"
                            placeholder="Option B"
                            value={optionB}
                            name="optionB"
                            onChange={onChange}
                        />
                        <input
                            type="text"
                            placeholder="Option C"
                            value={optionC}
                            name="optionC"
                            onChange={onChange}
                        />
                        <input
                            type="text"
                            placeholder="Option D"
                            value={optionD}
                            name="optionD"
                            onChange={onChange}
                        />
                    </div>
                   


                </section>
                <section className='btn'>
                    <button>Submit</button>
                </section>
            </form>

            <div>

            </div>
        </section>

    </main>
);
Choiceapp.propTypes = {
    question:PropTypes.string.isRequired,
    optionA:PropTypes.string.isRequired,
    optionB:PropTypes.string.isRequired,
    optionC:PropTypes.string.isRequired,
    optionD:PropTypes.string.isRequired,
};
