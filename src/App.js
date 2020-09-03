import React, {Component} from 'react';
import './App.css'
import Navbar from './navbar';
import {ItemDisplay} from './ItemDisplay';
import {Choiceapp} from './choiceapp';

class App extends Component {
  state = {
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    store : [
      {
        id:1,
        question:'',
        optionA:'',
        optionB:'',
        optionC:'',
        optionD:'',
      }
    ] ,
    options: [     
      'optionA',
      'optionB',
      'optionC',
      'optionD',
    ],
    RandomAnswer:'',
  };

  handleInputChange =(e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]:value
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const {question,optionA,optionB,optionC,optionD,} =this.state;
    const storeInState = this.state.store;
    const storeArrayLength = storeInState.length;
    const id = storeArrayLength ? (storeInState[storeArrayLength-1].id+ 1):1;
    this.setState({
      store : [
        ...storeInState,
        Object.assign({}, {
          id,
          question,
          optionA,
          optionB,
          optionC,
          optionD,
        })
      ],
      question:'',
      optionA:'',
      optionB:'',
      optionC:'',
      optionD:'',
    })

  };
  getRandomAnswer (min,max) {
    let a = max - min +1;
    let b = Math.random()*a;
    let result = Math.floor(b)+ min;
    return result;
  }
    handleRandom = () => {
      let index = this.getRandomAnswer(0,this.state.options.length-1);
      this.setState({
        RandomAnswer:this.state.options[index]
      })
    }

  render() {
    const {question,optionA,optionB,optionC,optionD, RandomAnswer} =this.state;
    return (
      <section>
        <div>
          <Navbar/>
          <Choiceapp
            question={question}
            optionA={optionA}
            optionB={optionB}
            optionC={optionC}
            optionD={optionD}
            onChange={this.handleInputChange}
            onSubmit={this.addItem}
          />
        </div>
        <div>
          {
            this.state.store.map((item, index) =>
              <ItemDisplay
                key={item.id}
                index={index}
                item={item}
                RandomAnswer={RandomAnswer}
                handleRandom={this.handleRandom}
              />
            )
          }
        </div>
      </section>
    )
  }
}

export default App;
