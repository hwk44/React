import { useState, useEffect } from "react";

const Mycom = () => { 
    // 컴포넌트 내부 함수
    let cnt1 = 0;

    // state 변수
    let [cnt2 ,setCnt2] = useState(0);

    //함수
    const showCnt =() => {
        console.log(`cnt1 = ${cnt1}`)
        console.log(`cnt2 = ${cnt2}`)
    }
    const addCnt1 = () => {
        ++cnt1;
        showCnt();
    }
    const addCnt2 = () => {
        setCnt2(++cnt2);
        // showCnt();
        // console.log(cnt2)
    }

    useEffect(() =>{
        showCnt();
        // console.log(cnt2)
    },[cnt2]);

    return(
        <>
            <ul>
                <li>cnt1 = {cnt1}</li>
                <li>cnt2 = {cnt2}</li>
            </ul>
            <form>
                <input type={"button"} value="cnt1증가" onClick={addCnt1}/>
                <input type={"button"} value="cnt2증가" onClick={addCnt2} />
                {/* <button>cnt1증가</button> */}
            </form>
        </>
    )
}
export default Mycom;
