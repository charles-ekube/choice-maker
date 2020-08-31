import React from 'react';
import './Decisionapp.css';
const Displayquestions = ({options,question}) => {
    let result = document.querySelector('.result');
    let getRandomNumber =(min, max) => {
        let first = max- min + 1;
        let second = Math.random() * first;
        let result = Math.floor(second) + min;
        return result;
    }
   let  handleRandomSelector = () => {
   
    let  index = getRandomNumber(options.length -1);
    result.innerHTML = options[index];
    console.log(result)  
   
   }
    
  

        const questionList = question.map(input =>{
            if (input.question !== ""){
                return (
                    <div className='displayquestionss'>
                        <h1>Question</h1>
                    <h3>{input.question}</h3>
                </div>
                )
            } else {
                return null
            }
        })
        const optionList = options.map(inputs =>{
            if ( inputs.optionA !== "" && inputs.optionB !== "" && inputs.optionC !== "" && inputs.optionD !=="") {
            return (
                <section className='displayquestions'>                    
                <div>
                    <h1>Options</h1>
                    <ul>
                        <li>A: {inputs.optionA}</li>
                        <li>B: {inputs.optionB}</li>
                        <li>C: {inputs.optionC}</li>
                        <li>D: {inputs.optionD}</li>
                    </ul>
                </div>
                <div className='answer'>
                    <button onClick={handleRandomSelector}>SELECT YOUR ANSWER </button>
                </div>
            {/* <HandleRandomSelector/> */}
            </section>
            
            )
        }
        else {
            return null
        }
        })
        
        return (
           <div>
               {questionList}
               {optionList}
           </div>
        )
        
    
   
}

export default Displayquestions;

