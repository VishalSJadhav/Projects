import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Calculator = () => {
    const [state, setState] = useState({
        input: ""
    });

    const clickNum = (e) => {
        setState({...state, input: state.input + e.target.value});
    }
    
    const clickSubmit = () => {
        //eslint-disable-next-line
        setState({...state, input: eval(state.input)});
    }

    const clickClear = () => {
        setState({input:""});
    }
    const inputFieldValue = (e) =>{
        setState({...state, input: e.target.value});
    }
    return (
      <div className="container">
      <div className="input">
        <input type="text" value={state.input} onChange ={inputFieldValue}/>
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