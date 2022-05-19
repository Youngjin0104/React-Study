import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import MainCom from './main';
import About from './about/about';
import Product from './product/product';
import Community from './community/community';
import Recruit from './recruit/recruit';


function App() {
  return (
    <div>
      <div className='header'>
        <div className='header_in'>
          <div className='logo'><h1>LOGO</h1></div>
          <div className='nav'>
            <ul>
              <li><Link to='/'>메인으로</Link></li>
              <li><Link to='/about'>회사소개</Link></li>
              <li><Link to='/product'>제품소개</Link></li>
              <li><Link to='/community'>커뮤니티</Link></li>
              <li><Link to='/recruit'>인재채용</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{width:'100%', height:'auto', background:'#ccc'}}>
        <Route path="/" exact={true} component={MainCom}/>
        <Route path="/about" component={About}/>
        <Route path="/product" component={Product}/>
        <Route path="/community" component={Community}/>
        <Route path="/recruit" component={Recruit}/>
      </div>
    </div>
  );
}

export default App;
