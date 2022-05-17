import React, { useState } from 'react';
import './App.css';
// import Box01 from './component/box';
// import Box02 from './component/box02';
import CheckBox from './component/checkbox';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };
  return (
    <div>
      {/* <div></div> 스타일시트 적용됨 <></> 스타일시트적용안됨 */}
      {/* <Box01 />
      <Box02 /> */}
      <CheckBox onChange={onChange} checked={check}>약관에 모두 동의</CheckBox>
    </div>
  );
}

export default App;
