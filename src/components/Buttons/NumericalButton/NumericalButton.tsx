import React from 'react';
import './NumericalButton.css'
import  Button  from '../Button';

class NumericalButton extends Button{


  override id: string;
  override index: string; 
  override className: string;
  override value: any;
  override props: any;
  
  constructor(props:any){
    super(props);
    this.id=props.id;
    this.index=props.index;
    this.value = props.value;
    this.className=props.className
  }

  override clickHandler(key: any) : void {
    console.log(" click handler from num button class")
    this.props.numBtnHandler(key);   
  }

  render() {
      return(<Button key={this.index} id={ this.id} onButtonClick={()=>this.clickHandler(this.props.value)} className={this.className} label={this.props.label} value={this.value} ></Button>)
  }
}

// const NumericalButton = (props) => {
  
  // function numBtnHandler(key){
  //   props.numBtnClickHandler(key);
  // }

//   return (
//     <Button key={props.index} id={props.id}  onButtonClick={()=>props.numBtnHandler(props.value)} className={props.className} value={props.value} ></Button>
//   )
// }

export default NumericalButton