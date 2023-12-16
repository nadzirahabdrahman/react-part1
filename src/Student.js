// import styles from './App.module.css'

// same as function Student() or Student() component
// props = arguments for HTML attributes
const Student = (props) => {

    //initialize variable
    // const student = {
    //   name: "Ahmad Nor Haziq",
    //   place: "Taiping, Perak"
    // }

    // const myStyle = {
    //     color: "#FFE3B3",
    //     backgroundColor: "#C957BC",
    //     padding: "10px"
    // }
  
    return (
      // <> = MUST have fragments or <div>
      <> 
        {/* <p>My name is {student.name} and I live at {student.place}</p> */}

        {/* Use HTML attributes to receive arguments as props */}
        {/* <p>My name is {props.name} and I live at {props.place}</p> */}

        {/* myStyle = can use css in the component */}
        {/* <p style={myStyle}>My name is {props.name} and I live at {props.place}</p> */}

        {/* styling css using className */}
        <p className="para1">My name is {props.name} and I live at {props.place}</p>

        {/* using css as a module, import App.module.css */}
        {/* <p className={styles.para1}>My name is {props.name} and I live at {props.place}</p> */}
        <hr/>
      </> // </> = END fragments or </div>
    )
  }



  export default Student