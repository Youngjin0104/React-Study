import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/todoTemplate';
import TodoHead from './components/todoHead';
import TodoList from './components/todoList';
import TodoCreate from './components/todoCreate';

// yarn add react-icons
// yarn add styled-components

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </div>
  );
}

export default App;
