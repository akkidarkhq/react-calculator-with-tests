import React from 'react';
import './OperationButton.css';

import  Button  from '../Button';

export default class OperationButton extends Button {
  override id: string;
  override index: string; 
  override className: string;
  override value: any;
  override props: any;
  override label: string;

constructor(props:any){
  super(props);
  this.id=props.id;
  this.index=props.index;
  this.value = props.value;
  this.className=props.className
  this.label = props.label;
}

override clickHandler(key: any) : void {
  console.log(" click handler from op button class called")
  this.props.opBtnHandler(key);   
}

render() {
    return(<Button key={this.index} id={ this.id} onButtonClick={()=>this.clickHandler(this.props.value)} className={this.className} value={this.value} label={this.props.label}></Button>)
}
}

// const OperationButton = (props) => {
     
//     return (
//       <Button key={props.index} id={props.id} className={props.className} onButtonClick={()=>props.opBtnHandler(props.value)} value={props.value.label} label={props.value.symbol} ></Button>
//     )
// }

//export default OperationButton;
