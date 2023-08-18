import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';


const equal = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 9h12M6 15h12"/></svg>;
const divide = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13H5v-2h14v2m-7-8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 10a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"/></svg> 



const fnBtnArr = () =>{
    return [{value:'OFF'},{value:'AC'},{value:'DEL'},{value:'Undo'},{value:'Redo'},{value:'theme'}];  
} 
const numBtnsArr = () =>{
    return [{type:'NUMBER',value:7},{type:'NUMBER',value:8},{type:'NUMBER',value:9},{type:'NUMBER',value:4},{type:'NUMBER',value:5},{type:'NUMBER',value:6},{type:'NUMBER',value:1},{type:'NUMBER',value:2},{type:'NUMBER',value:3},{type:'NUMBER',value:'.'},{value:0}]
}  

const opBtnsArr = () =>{
    return [{value:'ADDITION',label:'+',type:'OPERATOR',symbol:<AddIcon/>},{value:'SUBTRACT',label:'-',type:'OPERATOR',symbol:<RemoveIcon/>},{value:'MULTIPLY',label:'*',type:'OPERATOR',symbol:<CloseIcon/>},{value:'DIVIDE',label:'/',type:'OPERATOR',symbol:divide},{value:'EQUAL',label:'=',type:'OPERATOR',symbol:equal}]
}  

const  CalculatorModel =  {
    fnBtnArr,numBtnsArr,opBtnsArr
}

export default CalculatorModel;