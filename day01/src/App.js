import React from 'react';
import './App.css';
import Hello from './component/hello';
import Wrapper from './component/wrapper';

const style01 = {
  backgroundColor: 'deepskyblue',
  color: '#fff',
  fontSize: 40,
  padding: '1rem'
}

function App() {
  const name = "apple";
  return (
    <div>   {/* 
            [조건부 랜더링]
            {값 ? 참 : 거짓}
            {값 && 참}}
            */}
      <Wrapper>
        <div style={style01}>{name}</div>
        <div style={{ backgroundColor: 'blue', color: '#fff', fontSize: 40 }}>hello2</div>
        <div className='hello3'>hello3</div>
        <div id='hello3'>hello3-1</div>
        {/* <Hello name="banana"/> */}
        {/* <Hello name="banana" color="red"/> */}
        <Hello name="banana" color="gold" isSpecial={true} />
        <Hello />

      </Wrapper>
    </div>
  );
}

export default App;
