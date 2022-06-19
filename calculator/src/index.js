import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Calculator = () => {
    const [state, setState] = useState([]);

    const clickNum = (e) => {
        state.push(e.target.value);
        console.log(state.join(""));
    }
    
    const clickSubmit = () => {
        var result = state.join("");
        // eslint-disable-next-line
        console.log(eval(result));
        setState([]);
    }
    /*const clickBack = () => {
        state.pop();
        console.log(state.join(""));
    }*/
    const clickClear = () => {
        setState([]);
        console.log(state.join(""));
    }
    const inputFieldValue = (e) =>{
        setState(e.target.value);
        console.log(setState);
    }
    return (
      <div className="container">
      <div className="input">
        <input type="text" onChange ={inputFieldValue}/>
      </div>
      <div className="operators">
          <button className="add" onClick={clickNum} value={'+'}>+</button>
          <button className="subtract" onClick={clickNum} value={'-'}>-</button>
          <button className="multiply" onClick={clickNum} value={'*'}>*</button>
          <button className="divide" onClick={clickNum} value={'/'}>/</button>
      </div>
      <div className="left-panel">
          <div className="numbers">
              <button onClick={clickNum} value={'7'}>7</button>
              <button onClick={clickNum} value={'8'}>8</button>
              <button onClick={clickNum} value={'9'}>9</button>
          </div>
          <div className="numbers">
              <button onClick={clickNum} value={'4'}>4</button>
              <button onClick={clickNum} value={'5'}>5</button>
              <button onClick={clickNum} value={'6'}>6</button>
          </div>
          <div className="numbers">
              <button onClick={clickNum} value={'1'}>1</button>
              <button onClick={clickNum} value={'2'}>2</button>
              <button onClick={clickNum} value={'3'}>3</button>
          </div>
          <div className="numbers">
              <button onClick={clickNum} value={'0'}>0</button>
              <button onClick={clickNum} value={'.'}>.</button>
              <button className="clear" onClick={clickClear}>C</button>
          </div>
      </div>
      <div className="right-panel">
          <div className="result">
              <button onClick={clickSubmit}>=</button>
          </div>
      </div>
      </div>
    );

}

ReactDOM.createRoot(document.getElementById("root")).render(<Calculator/>);