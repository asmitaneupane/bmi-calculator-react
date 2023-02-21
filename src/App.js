import { useState } from 'react';
import './App.css';
import RangeAreaChart from './RangeAreaChart';

function App() {

  //states here
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  //onClick reload button
  const reload = () => {
    window.location.reload();
  }

  //logic here
  const calcBmi = (e) => {

    //prevent submitting
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please Enter Height and Weight.');
    }

    else {
      let heightInMeter = height * 0.3048;
      let bmi = (weight / (heightInMeter * heightInMeter))
      setBmi(bmi.toFixed(2));


      //message after calculating BMI
      if (bmi < 18.5) {
        setMessage("You are Underweight");
      }
      else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are Healthy Weight.")
      }
      else if (bmi >= 25 && bmi < 30){
        setMessage("You are Overweight.")
      }
      else {
        setMessage("Obese!")
      }
    }
  }

  //to clear height input on click
  const clearHeight = () => {
    setHeight('');
  }

  //to clear weight input on click
  const clearWeight = () => {
    setWeight('');
  }

  return (
    <div className='app'>
      <div className="calculator">
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              placeholder='Input Weight Value'
              value={weight}
              onClick={clearWeight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="height">Height (in)</label>
            <input
              type="number"
              placeholder='Input Height Value'
              value={height}
              onClick={clearHeight}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className='btn' type="submit">Submit</button>
            <button className='btn btn-outline' onClick={reload} type="submit">Reload</button>
          </div>

          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <RangeAreaChart bmi={bmi} />
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
