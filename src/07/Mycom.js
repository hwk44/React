import { useState, useEffect, useRef } from "react";

const Mycom = () => {
    // // 컴포넌트 내부 함수
    // let cnt1 = 0; // 랜더링이 일어나면 다시 0으로 초기화 됨

    // // state 변수
    // let [cnt2 ,setCnt2] = useState(0);

    // // ref 변수
    // const cnt3 = useRef(0); // 랜더링이 일어나도 값이 초기화 되지 않음

    // //함수
    // const showCnt =() => {
    //     console.log(`cnt1 = ${cnt1}`)
    //     console.log(`cnt2 = ${cnt2}`)
    //     console.log(`cnt3 = ${cnt3.current}`)
    // }
    // const addCnt1 = () => {
    //     ++cnt1;
    //     showCnt();
    // }
    // const addCnt2 = () => {
    //     setCnt2(++cnt2);
    //     // showCnt();
    //     // console.log(cnt2)
    // }
    // const addCnt3 = () =>{
    //     cnt3.current = cnt3.current + 1
    //     showCnt();
    // }

    // useEffect(() =>{
    //     showCnt();
    //     // console.log(cnt2)
    // },[cnt2]);

    let [tag, setTag] = useState();
    const txt1R = useRef();
    const txt2R = useRef();

    // 컴포넌트가 처음 랜더링 되었을때
    useEffect(()=>{
        txt1R.current.focus(); // 마우스 커서가 txt1R인 곳으로 옮김
    },[])


    // useEffect(()=>{

    // },[txt1R])

    // useEffect(()=>{

    // },[txt1R])

    const checkForm = (e) => {
        e.preventDefault();
        setTag(`입력된 아이디는 ${txt1R.current.value}이고 비밀번호는 ${txt2R.current.value}입니다.`)
        // console.log("checkForm")
    }

    return (
        <>
            <form name="myform">
                <input ref={txt1R} type="text" name="txt1" placeholder="아이디 입력" />
                <input ref={txt2R} type="password" name="txt2" placeholder="비밀번호 입력" />
                <input type="button" value="확인" onClick={checkForm}/>
                <input type="reset" value="취소" />
                <div>
                    {tag}
                </div>
            </form>
        </>
    )
}
export default Mycom;
