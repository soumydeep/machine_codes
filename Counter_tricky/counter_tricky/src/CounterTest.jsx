import { useState,useDispatch, useReducer } from "react";

// using this for testing mulyiple component with render in single return array of component
// function DivData1(){
    
//     return <div>1</div>
// }

// function DivData2(){
    
//     return <div>2</div>
// }


function CounterTest() {

    //let [counter,setCounter]=useState(0);// using this for the multiple call of setter functions
    const [count,dispatch]=useReducer(reducer,0);
    console.log("som");

  
    function reducer(state,action){
        if(action.type==="add"){
            return state+1;
        }else if(action.type==="subtract"){
            return state-1;
        }
    }


    const handleClickEvent=(e)=>{
        if(e.target.name==="add"){
            dispatch({type:"add"});

            
            //setCounter(counter+1);
            //setCounter(counter+1);
            //setCounter(counter+1);
            //setCounter(counter+1);
            // calling setCounter Multiple times will give only single addition update because the hook sends all the setter call in batched so it 
            // will update only once but setter has a call back function so if we use call back it will update the data the number of time we call setter
            // setCounter((prevCounter)=>{prevCounter+1});

            
        }else if(e.target.name==="subtract"){
            dispatch({type:"subtract"});
            //setCounter(counter-1);
        }
        
    }

    return (
    <>
        <div>Counter</div>
        <button name="add" onClick={(e)=>handleClickEvent(e)}>Add Value +</button>
        <button name="subtract" onClick={(e)=>handleClickEvent(e)}>Subtract Value -</button>
        <div>{count}</div>
    </>
    );
   
    // const arr=[<DivData1></DivData1>,<DivData2></DivData2>]
    // return arr;
    // this is how we render multiple components without using fragment or parent div with the help of an array
}

export default CounterTest;