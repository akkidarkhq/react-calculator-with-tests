import { render,screen,fireEvent } from '@testing-library/react';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import Button from './components/Buttons/Button';
import Enzyme from 'enzyme';
import { shallow,configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';


Enzyme.configure({adapter:new Adapter()});

describe("befor al ",()=>{
  const utils = render(<Router><App/></Router>);
})

test('check username input', () => {
  const usernameInput = screen.getByLabelText("Username");
    fireEvent.change(usernameInput,{target:{value:'$23'}})
    expect(usernameInput.value).toBe('$23');
});


test('check password input', () => {
  const dom = render(<Router><App/></Router>);
  const passwordInput = screen.getByLabelText("Password")
  fireEvent.change(passwordInput,{target:{value:"akki1233"}})
  expect(passwordInput.value).toBe("akki1233");
})


test("login component",()=>{
  const dom = render(<Router><App/></Router>);

  const usernameInput = screen.getByLabelText("Username");
  fireEvent.change(usernameInput,{target:{value:'admin'}});

  const passwordInput = screen.getByLabelText("Password")
  fireEvent.change(passwordInput,{target:{value:"admin"}})

  const submitBtn = screen.getByRole('button',{id:"submitButton"});

  fireEvent.click(submitBtn);


})



describe('test button component',()=>{
  it("test click event",()=>{
    const mockCallBack = jest.fn(()=>({type:'NUMBER',value:8}));

   
    const button = shallow(<Button onButtonClick={mockCallBack}></Button>)
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })
})


//https://bleext.com/post/how-to-test-redirections-and-history-state-with-jest

