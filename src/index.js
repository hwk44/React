import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render( 
     <App />
 );

// setInterval 안에 line 9~11 을 넣은것 1초마다 "시간만" 재로드
// setInterval(()=>{root.render( <App /> ); },1000)