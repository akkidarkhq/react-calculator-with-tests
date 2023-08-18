import React from 'react'
import './FunctionButton.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import  Button  from '../Button';

class FunctionButton extends Button{
 /*
  override id: string;
  override index: string; 
  override className: string;
  override value: any;
  override props: any;
  */

  
  constructor(props:any){
    super(props);
    // this.id=props.id;
    // this.index=props.index;
    // this.value = props.value;
    // this.className=props.className
  }

  override clickHandler(key: any) : void {
    console.log("fn butn clik handlr called from fnbtn class ")
    this.props.fnBtnClickHandler(key);   
  }


  render() {
      return(<Button onButtonClick={()=>this.props.fnBtnClickHandler(this.props.value)}  {...this.props} ></Button>)
  }
}


// const FunctionButton = (props) => {

//     return (
//     <Button key={props.index} id={props.id} onButtonClick={()=>props.fnBtnClickHandler(props.value)} className={props.className} value={props.value} ></Button>
//   )
// }

export default FunctionButton;
