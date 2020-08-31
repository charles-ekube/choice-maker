import React, {Component} from 'react';

class HandleRandomSelector extends Component {
    state = {
        options : [
          { optionA:'', optionB:'', optionC:'', optionD:'', id:1}
        ],
        questions :[
          {question:''}
        ],
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
        <div className='result'></div>
    )
}

    
}



export default HandleRandomSelector;