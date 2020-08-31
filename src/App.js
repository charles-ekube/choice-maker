import React, {Component} from 'react';
import './Decisionapp.css';
import Navbar from './navbar';
import Decisionapp from './decisionapp';
import Displayquestions from './displayData';
import HandleRandomSelector from './randomselector';

class App extends Component {
  state = {
    options : [],
    questions :[],
    

  }
 
  newOption = (option)=> {
    
    option.id =Math.random();
    let options = [...this.state.options, option]
    this.setState({
      options:options,
    })
  }
  newQuestion = (question) => {
    question.id =Math.random();
    let questions = [...this.state.questions, question]
    this.setState({
      questions:questions,
    })
  }
 
 handleRandomSelector = () => {
        let result = document.querySelector('.result');
        this.props.options(this.state);
       let getRandomNumber =(min, max) => {
            let first = max- min + 1;
            let second = Math.random() * first;
            let result = Math.floor(second) + min;
            return result;
        }
        let  index = getRandomNumber(0, this.newOption.length -1);
        result.InnerText = this.newOption[index];
    }
  render() {
    return (
      <div>
        <Navbar/>       
         <Decisionapp newOption={this.newOption} 
         newQuestion={this.newQuestion}/>
        <Displayquestions
           handleRandomSelector={()=> this.handleRandomSelector}
        options={this.state.options}
        question={this.state.questions}
        newOption={this.newOption} 
        newQuestion={this.newQuestion} 
     /> 
     <HandleRandomSelector  newOption={this.newOption} 
         newQuestion={this.newQuestion}/>
      </div>
    
    )
  }
}

export default App;
