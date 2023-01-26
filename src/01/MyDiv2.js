

const MyDiv2 = () => { // 사용자 정의 함수는 뭐든 간에 return이 있어야함
 const myName = '김현우';
 const myGit = 'https://github.com/hwk44'
//  console.log(myName);
  return (
    <div >
      <p>{myName}입니다.</p>
      <p>GitHub : <a href={myGit}>{myGit} </a></p>
    </div>
  );
}

export default MyDiv2;
