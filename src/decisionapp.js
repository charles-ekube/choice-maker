import React, {Component} from 'react';
import './Decisionapp.css';
import displayQuestions from './displayData';
import Displayquestions from './displayData';


class Decisionapp extends Component {
    constructor(props){
        super(props);
        this.state = {
            options : [],
              questions :[],
              
        }
    }    
    handleQuestionChange =(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleOptionsChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
       this.props.newOption(this.state);
       this.props.newQuestion(this.state);
    }
 
   
   render() {
       return (
           
           <main>
               
               <section className="homeSection">
      <form onSubmit={this.handleSubmit}>
         <section className="question">

             <legend>
                 Question
             </legend>
             <div>
             <input type="text" placeholder="Q: Enter your question here" name='question' id='question' onChange={this.handleQuestionChange} />
</div>
      
          </section>
          <section className="options">    
              <legend>
                  Options
              </legend>
              <div>
                <input type="text" placeholder="A:" name='option' id='optionA' onChange={this.handleOptionsChange}/>
                <input type="text" placeholder="B:" name='optionB' id='optionB' onChange={this.handleOptionsChange}/>
                <input type="text" placeholder="C:" name='optionC' id='optionC' onChange={this.handleOptionsChange}/>
             <input type="text" placeholder="D:" name='optionD' id='optionD' onChange={this.handleOptionsChange}/>
              </div>
              
         </section>
          <section className='btn'>
              <button type='submit'>Submit</button>
          </section>
      </form>
      <div>
       
      </div>
 </section>
 
           </main>
           
       )
   }
} 



export default Decisionapp;




