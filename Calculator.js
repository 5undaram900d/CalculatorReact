import React, {useState} from 'react';
import {Container, Scrn, Prev, Curr, Btn} from '../styles/main';

const Calculator = () => {
  const [curr, setCurr] = useState('');
  const [prev, setPrev] = useState('');
  const [oprtns, setOprtns] = useState('');

  const appValEvnt = (el) => {
    const val = el.target.getAttribute('data');
    if(val === '.' && curr.includes('.')) return;
    setCurr(curr + val);
  };

  const delEvnt = () => {
    setCurr(String(curr).slice(0,-1));
  };

  const allClrEvnt = () => {
    setCurr('');
    setOprtns('');
    setPrev('');
  }

  const chooseOprtnEvnt = (el) => {
    if(curr === '') return;
    if(prev !== ''){
      let val = compute();
      setPrev(val);
    }
    else{
      setPrev(curr);
    }
    setCurr('');
    setOprtns(el.target.getAttribute('data'));
  };

  const eqlEvnt = () => {
    let val = compute()
    if(val === undefined || val == null) return;
    setCurr(val);
    setPrev('');
    setOprtns('');
  }
  const compute = () => {
    let res;
    let prevNum = parseFloat(prev);
    let currNum = parseFloat(curr);
    if(isNaN(prevNum) || isNaN(currNum)) return;
    switch(oprtns){
      case '÷':
        res = prevNum / currNum;
        break;
      case 'x':
        res = prevNum * currNum;
        break;
      case '+':
        res = prevNum + currNum;
        break;
      case '-':
        res = prevNum - currNum;
        break;  
      default: 
        return;
    }
    return res;
  };

  return (
    <>
    <Container>
        <Scrn>
            <Prev>
             {prev} {oprtns}
            </Prev>
            <Curr>{curr}</Curr>
        </Scrn>
        <Btn gridSpan={2} onClick={allClrEvnt} cont>AC</Btn>
        <Btn onClick={delEvnt}>DEL</Btn>
        <Btn data={'÷'} onClick={chooseOprtnEvnt} oprtn>÷</Btn>
        <Btn data={7} onClick={appValEvnt}>7</Btn>
        <Btn data={8} onClick={appValEvnt}>8</Btn>
        <Btn data={9} onClick={appValEvnt}>9</Btn>
        <Btn data={'x'} onClick={chooseOprtnEvnt} oprtn>x</Btn>
        <Btn data={4} onClick={appValEvnt}>4</Btn>
        <Btn data={5} onClick={appValEvnt}>5</Btn>
        <Btn data={6} onClick={appValEvnt}>6</Btn>
        <Btn data={'+'} onClick={chooseOprtnEvnt} oprtn>+</Btn>
        <Btn data={1} onClick={appValEvnt}>1</Btn>
        <Btn data={2} onClick={appValEvnt}>2</Btn>
        <Btn data={3} onClick={appValEvnt}>3</Btn>
        <Btn data={'-'} onClick={chooseOprtnEvnt} oprtn>-</Btn>
        <Btn data={'.'} onClick={appValEvnt} dec>.</Btn>
        <Btn data={0} onClick={appValEvnt}>0</Btn>
        <Btn gridSpan={2} onClick={eqlEvnt} eqls>=</Btn>
    </Container>
    </>
  );
};

export default Calculator