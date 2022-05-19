import React, { useState } from 'react';
import styled,{css} from 'styled-components';
import './App.css';
import CheckBox from './component/checkbox';
// import Box01 from './component/box';
// import Box02 from './component/box02';

// [모듈설치]
// yarn add stryled-components 상단에 import styled from 'styled-components';
// yarn add react-icons
// https://react-icons.github.io/react-icons/#/

// 선언형 컴포넌트
const TestBox = styled.div`
  width:300px;
  height:300px;
  background:skyblue;
`;

const Circle = styled.div`
  width:300px;
  height:300px;
  border-radius:50%;
  background:${props => (props.color || 'black')};
  ${props => (props.big && css`
  width:150px;
  height:150px;`)}
`;



function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
    setBox(e.target.box1);
  };
  

  const [box, setBox] = useState(true);
  
  return (
    <div>
      {/* <div></div> 스타일시트 적용됨 <></> 스타일시트적용안됨 */}
      {/* <Box01 />
      <Box02 /> */}
      <CheckBox onChange={onChange} checked={check} box={box}>약관에 모두 동의</CheckBox>
      <TestBox/>
      <Circle color='deeppink'/>
      <Circle/>
      <Circle big/>
    </div>
  );
}

export default App;
