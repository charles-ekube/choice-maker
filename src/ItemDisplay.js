import React from 'react';
import PropTypes from 'prop-types';



export const ItemDisplay = ({item, handleRandom, index, RandomAnswer}) => (
  
    <section className='display-section'>
        <div>
            <h3 title='Question'>{item.question}</h3>
        </div>
        <div>
            <p title='OptionA'>{item.optionA}</p>
            <p title='OptionB'>{item.optionB}</p>
            <p title='OptionC'>{item.optionC}</p>           
            <p title='OptionD'>{item.optionD}</p>
        </div>
        <div className='btn'>
            <button onClick={handleRandom}>RandomAnswer</button>
            <p>{RandomAnswer}</p>
        </div>

    </section>
);

ItemDisplay.propTypes = {
    RandomAnswer:PropTypes.string.isRequired,
    item: PropTypes.shape({
        question:PropTypes.string.isRequired,
        optionA:PropTypes.string.isRequired,
        optionB:PropTypes.string.isRequired,
        optionC:PropTypes.string.isRequired,
        optionD:PropTypes.string.isRequired, 
        
    }), 
};
