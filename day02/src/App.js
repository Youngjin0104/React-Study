import React, { useState } from 'react';
import './App.css';
// import Counter from './component/counter';
// import Input from './component/input';
// import MultiInput from './component/multiinput';
import UserList from './component/UserList';

// 상태관리_인터렉션
function App() {
  // 상태 초기값 설정

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const [users, setUsers] = useState([
    {
      Id: 1,
      username: '김사과',
      email: 'apple@apple.com',
      active: true
    },
    {
      Id: 2,
      username: '오렌지',
      email: 'orange@apple.com',
      active: false
    },
    {
      Id: 3,
      username: '바나나',
      email: 'banana@apple.com',
      active: false
    },
    {
      Id: 4,
      username: '이메론',
      email: 'melon@apple.com',
      active: false
    },
    {
      Id: 5,
      username: '배애리',
      email: 'berry@apple.com',
      active: false
    }
  ]);

  return (
    <div>
      {/* <Counter/> */}
      {/* <Input /> */}
      {/* <MultiInput/> */}

      <UserList users={users}/>
    </div>
  );
}

export default App;
