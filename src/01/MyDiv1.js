import logo from '../logo.svg';

const MyDiv1 = () => { // 사용자 정의 함수는 뭐든 간에 return이 있어야함
 
  return (
    <div >
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default MyDiv1;
