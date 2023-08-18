import React from 'react'
import './Button.css'

class Button extends React.Component{

  id:string="";
  index:string="";
  className:string="";
  value:any="";
  label:string="";
  props: any="";


  constructor(props:any){
    super(props);
    this.props = props;
    this.index = props.index;
    this.id = props.id;
    this.label=this.props.label
    this.className=props.className
    this.value=props.value;
    this.clickHandler = this.clickHandler.bind(this);
  }
   clickHandler(key:any) {
    console.log("i am called")
    this.props.onButtonClick(key)
 }
  
  render(){
    return  (
      <button key={this.index} id={this.id} type='button' onClick={this.clickHandler} className={''+this.className}>{this.label}</button>
    )
  }

}

// export const Button = (props) => {

// const clickHandler= (key) =>{
//   props.onButtonClick(key);
//   console.log(props.id)
//  }
  

//   return (
//   //  <button className={props.className} onClick={()=>{clickHandler(props)}} 
//   //  id={props.id}>{props.value}</button>
  
//   )

export default Button;
