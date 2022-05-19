import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
// yarn add react-router-dom@5
// 특정 주소에 컴포넌트 연결하는 방법
import Home from './home';
import History from './history';
import Profiles from './profiles';
import About from './about';

function App() {
    return (
        <div>
            {/* <Route path="주소" component={보여줄 컴포넌트}> */}
            {/* <Link to ="주소">문자</Link> */}
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/about">소개</Link></li>
                <li><Link to="/profiles">프로필</Link></li>
                <li><Link to="/history">히스토리예제</Link></li>
            </ul>

            <div>
                <Route path="/" exact={true} component={Home}/> 
                <Route path="/about" component={About}/> 
                <Route path="/profiles" component={Profiles}/> 
                <Route path="/history" component={History}/> 
            </div>
        </div>
    )
}

export default App;