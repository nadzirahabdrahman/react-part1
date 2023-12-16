// import styles from'./App.module.css';
import './App.css'
import Student from './Student.js'

// same as function App()
const App = () => {

  // handle button Enter
  const buttEnter = () => {
    // get id from input text 
    const name = document.getElementById("name");

    // must use `` quotes to use jQuery tag
    alert(`Lets study with me ${name.value}`);
  }

  return (
    <>
      {/* using css as a module, import App.module.css */}
      {/* <h1 id={styles.header1}>StudyReactwithme!</h1> */}

      <h1 id="header1">StudyReactwithme!</h1>
      {/* <Student/> */}

      {/* Call Student() to display what's inside the function */}
      {/* {HTML attributes = name, place } */}
      {/* <Student name="Ahmad Nor Haziq" place="Taiping, Perak" />  */}

      <div>
        <input type='text' id='name' placeholder='Enter your name'/>
      </div>
      <div>
        {/* <button onClick={buttEnter}>Enter</button> */}
        <button onMouseOver={buttEnter}>Enter</button>
      </div>
    </>
  );
  
}

export default App;
