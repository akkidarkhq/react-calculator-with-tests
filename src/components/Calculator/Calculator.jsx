import React, { useEffect, useState } from 'react'
import Display from '../Display/Display'
import './Calculator.css'
import CalculatorModel from './Calculator.model'
import FunctionButton  from '../Buttons/FunctionButton/FunctionButton'
import OperationButton from '../Buttons/OperationButton/OperationButton'
import NumericalButton from '../Buttons/NumericalButton/NumericalButton'
import  axios from 'axios'
import AuthService from '../../Services/auth.service.jsx'
import authHeader from '../../Services/auth.header'

const Calculator = (props) => {
  const currentUser = AuthService.getCurrentUser();
  // hooks
  const [displayValue,setDisplayValue] = useState(0) ;
  const [expStack,setExpStack] = useState([]);
  const [resultValue,setResultValue] = useState('');
  const [resultStack,setResultStack] = useState([]); 
  const [access,setAccess] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState('')

 

  const fnBtnArray = CalculatorModel.fnBtnArr();
  const numBtnsArray = CalculatorModel.numBtnsArr();
  const opBtnsArray = CalculatorModel.opBtnsArr();
 
  // const fnBtnList = fnBtnArray.map((btn,index) =>  { return  <button key={index} id={'fnbtn'+index} onClick={()=>fnBtnClickHandler(btn)} className='fnbtn'>{btn.value}</button> } )
  // const numBtnsList = numBtnsArray.map((btn,index) => { return <button key={index} className='numbtn' onClick={()=>numBtnHandler(btn)} id={'numbtn'+index}>{btn.value}</button>})
  // const opBtnsList = opBtnsArray.map( (btn,index) => {return <button key={index}  id={'opbtn'+index} className='opbtns' onClick={()=>opBtnHandler(btn)}>{btn.symbol}</button>})

  const fnBtnList = fnBtnArray.map((btn,index) =>  { return  <FunctionButton key={index} id={'fnbtn'+index+props.id} value={btn} fnBtnClickHandler={fnBtnClickHandler} label={btn.value} className='fnbtn'></FunctionButton> } )
  const numBtnsList = numBtnsArray.map((btn,index) => { return <NumericalButton key={index} id={'numbtn'+index+props.id} value={btn} className='numbtn' label={btn.value} numBtnHandler={numBtnHandler}></NumericalButton>})
  const opBtnsList = opBtnsArray.map( (btn,index) => {return <OperationButton key={index}  id={'opbtn'+index+props.id} value={btn} className='opbtns' label={btn.label} opBtnHandler={opBtnHandler}></OperationButton>})


  useEffect(()=>{
    console.log(expStack)
    checkLogin();
    checkAccess();
  },[expStack]);

  function checkAccess(){
    if(isLoggedIn==true){
      if(currentUser.roles) 
      currentUser.roles.map((role) => {
          if(role==="ROLE_ADMIN"){
            setAccess(true);
            console.log(access+" access value")
          }
      })
    }
  }

  function checkLogin(){
    if(currentUser!==null){
      setIsLoggedIn(true);
    }
  }

  const delExpStack = () => {
    if(expStack.length!==0){
      const dispValue = displayValue.substring(0,displayValue.length-1);
      const lastEl =  expStack[expStack.length-1].value;
      console.log(dispValue);
      setDisplayValue(dispValue)
      if(lastEl.length > 1 && expStack[expStack.length-1].type==="NUMBER"){
          console.log (lastEl);
          expStack[expStack.length-1].value = (lastEl.substring(0,lastEl.length-1))
          console.log (expStack);
        }else{
          expStack.splice(expStack.length-1);
        }
      }
  }

  const clearExpStack = () => {
    if(expStack.length!==''){
      expStack.splice(0,expStack.length);
      console.log(expStack)
    }
  }

  const addExpStack = (obj) => setExpStack(prev => ([...prev,{type:obj.type,value:obj.value}])) 

  function numBtnHandler(key){
    // if(resultValue!==0){
    //   setDisplayValue(resultValue);
    //   addExpStack({type:"NUMBER",value:displayValue})
    // }

    if(displayValue===0 ){
      setDisplayValue(key.value);
      addExpStack({type:key.type,value:key.value}) 
    }else if(expStack[expStack.length-1].type==="NUMBER"){
      console.log("last number is num type");
      setDisplayValue(displayValue+''+key.value);
      const newVal = expStack[expStack.length-1].value +''+ key.value;
      expStack.pop();
      addExpStack({value:newVal,type:"NUMBER"}) 
    }else {
      setDisplayValue(displayValue+''+key.value);
      addExpStack({type:key.type,value:key.value}) 
    }
  }

  function opBtnHandler(key){
    if(key.value==="EQUAL"){
      calculateValue();
      return;
    }

    if(displayValue===0){
      return;
    } else 
    if(displayValue!==0 && expStack[expStack.length-1].type=="OPERATOR"){
        setDisplayValue(displayValue.substring(0,displayValue.length-1)+ key.label);
        expStack.pop();
        addExpStack({type:key.type,value:key.value})
    }else if(expStack[expStack.length-1].type=="NUMBER"){
        setDisplayValue(displayValue+''+key.label)
        addExpStack({type:key.type,value:key.value})
    }
  }

  function fnBtnClickHandler(key){

    console.log(props.id)
    if(key.value==="AC"){
      clearExpStack();
      setDisplayValue(0);
    }else if(key.value==='OFF'){
      console.log("OFF Button called")
    }else if(key.value==='DEL'){
      delExpStack();
    }else if(key.value==='Undo'){
      console.log("undo Button called")
    }else if(key.value==='Redo'){
      console.log("redo Button called")
    }else if(key.value==='theme'){
      console.log("Theme Button called")
    }
  }


  function calculateValue(){
    if(access==true){
      axios.post('http://localhost:8080/SpringSecurityWithJwt/calc',
      JSON.stringify(expStack),
      {headers:authHeader()}
    )
    .then(data=>{
      console.log(data) 
      if(data.data!==null){
        setResultValue('='+data.data);
      }
      clearExpStack();
      return data.data;
    })
    .catch(err=>console.error(err))
    }else{
      setResultValue("you are not authorised")
    }
  } 
      const CalcComp = () =>{
        return (
          <div className='calculatorContainer' id={props.id}>
            CASINO
            <div className='displayContainer' id={'displayContainer'+props.id}>  
              <Display displayValue={displayValue} id={props.id} resultValue={resultValue}/>
              </div>
              <div className='btncontainer' id={'btnContainer'+props.id}>
                <div className='fnBtnContainer'>{ fnBtnList  }</div>
                <div className='opBtnContainer' id={'opBtn'+props.id}><div className='operation'>{opBtnsList}</div></div>
                <div className='numBtnContainer' id={'numBtn'+props.id}>{numBtnsList}</div>   
            </div>
          </div>
          )
      }

      const ErrorComp = () =>{
        return (
          <div className='calculatorContainer'>
            Sorry you not logged in
          </div>
          )
      }

    return (
      isLoggedIn  ? <CalcComp/> : <ErrorComp/>
    )
  }

export default Calculator;