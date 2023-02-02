import Mydiv11 from "./Mydiv11";
import { useState, useEffect } from "react";

// const Mydiv1 = (probs) => {
//     console.log(probs) // probs 는 오브젝트 형태임
//     const user = probs.user; // 오브젝트니까 (Object.key)이런식으로 접근 가능

const Mydiv1 = ({user, n, setN}) => { // user 키 값(속성 이름)을 오브젝트가 아닌 값 자체를 받을 수 있음
        // console.log("mydiv" , user) // user = "React!"

// useState 함수로 cnt가 변하는 것을 화면에 찍을 수 있음
let [cnt, setCnt] = useState(0); // [사용변수명, 콜백함수 이름] = useState(초기값);

const addCnt = () => {  // state변수로 선언했다면 임의로 바꿀수 없음. set 함수로만 바꾸어야함 cnt++; 이런거 안됨
    setCnt(++cnt);      // cnt++로 하면 두번 클릭해야만 바뀜/ state 변수가 바뀌면 화면에 재 랜더링이 이루어짐
    setN(++n);
    // setN(++n);
    // console.log(cnt);   
}
useEffect(() => { 
    console.log("Mydiv1 처음한번만 실행되는 유즈 이펙트")
    // n--;
    return(
        console.log("종료")
    );
    // n--;
}, []);

// useEffect(() => {
//     console.log("변경되었습니다.")
// });


useEffect(() => {
    // console.log("cnt 변경으로 n 변경", cnt ,n)
    
    console.log("cnt 변경으로 n 변경", cnt ,n)
    
}, [cnt]); // 맨뒤에 스테이트 변수가 바뀔때 무슨 처리를 하고 싶다면 유즈 이펙트

    return(
        <div className="mydiv1">
        <h2 className="divh2">Mydiv1{user} {n}</h2>
        <Mydiv11 user={user} divname={"사용자 정의" + cnt} />
        <div className="divbt">
            <button onClick={addCnt}>❤</button>
            <span>{cnt}</span>
        </div>
        </div>
    );

}
export default Mydiv1;