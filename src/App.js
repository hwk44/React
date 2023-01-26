import './App.css';
import MyDiv1 from './01/MyDiv1';
import MyDiv2 from './01/MyDiv2';
import MyClock from './01/MyClock';

const App = () => { // 사용자 정의 함수는 뭐든 간에 return이 있어야함
  // console.log('App.js')
  return (
    <div className="App-header">
    <MyDiv1 /> 
    <MyDiv2 />
    <MyClock />
    </div>
  );
}

export default App;
