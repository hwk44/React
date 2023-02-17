import "./Boxoffice.css"
import { useState, useEffect, useRef } from "react";
import Boxofficelist from "./Boxofficelist";

const Boxoffice = () => {
    // 상영일 선택 state
    let [targetDt, setTargetDt] = useState();

    // input 제어
    const mvdr = useRef();

    // 초기 랜더링
    useEffect(() => {
        mvdr.current.focus();
    }, [])

    // targetDt 변경 시
    useEffect(() => {
        // console.log("targetDt", targetDt)
    }, [targetDt])

    // input 이벤트
    const handleMv = () => {
        // console.log(mvdr.current.value);
        setTargetDt(mvdr.current.value.replaceAll('-', ''));
    }
    return (
        <>
            <div className="mvh">
                <h1>박스 오피스</h1>
                <form>
                    <input type="date" name="mvd" ref={mvdr} onChange={handleMv}></input>
                </form>
            </div>

            <div className="mvmain">
               {targetDt && <Boxofficelist targetDt={targetDt} />}
            </div>
        </>
    );
}
export default Boxoffice;