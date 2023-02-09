import "./MyForm.css"
import { useEffect, useState, useRef } from "react";

const MyForm = () => {

    // 폼 연결
    const txt1R = useRef();
    const txt2R = useRef();
    const sel1R = useRef();

    // 화면 표시 태그
    let [msgtag, setMsgTag] = useState();

    //확인 버튼 눌렀을때
    const formCheck = () => {
        if (txt1R.current.value === "") {
            alert("아이디를 입력하세요.")
            txt1R.current.focus();
            return;
        } else if (txt2R.current.value === "") {
            alert("비밀번호를 입력하세요.")
            txt2R.current.focus();
            return;
        }

        setMsgTag(<p>아이디가 <span class="sp1">{txt1R.current.value}</span>이신 분의,
        선택과목은 <span class="sp1">{sel1R.current.value}</span> 입니다.</p>);
    }

    // 취소 버튼을 눌렀을때
    const clear = () => {
        setMsgTag("")

    }
    return (
        <>
            <form name="myform">
                <p>
                    <label htmlFor="txt1">아이디 : </label><br />
                    <input ref={txt1R} type="text" name="txt1" id="txt1" placeholder="아이디 입력" />
                </p>
                <p>
                    <label htmlFor="txt2">비밀번호 : </label><br />
                    <input ref={txt2R} type="password" name="txt2" id="txt2" placeholder="비밀번호 입력" />
                </p>
                <p>
                    <label htmlFor="txt3">선택과목 : </label><br />
                    <select defaultValue="자바스크립트" ref={sel1R} className="select" name="sel1">
                        <option value="자바">자바</option>
                        <option value="HTML">HTML</option>
                        <option value="자바스크립트" defaultValue>자바스크립트</option>
                        <option value="리액트">React</option>
                    </select>
                </p>
                <p>
                    <input className="button" type="button" value="확인" onClick={() => formCheck()} />
                    <input className="button" type="reset" value="취소" onClick={() => clear()}/>
                </p>
            </form>
            <div id="msg">
                {msgtag}
                {/* {txt1R && txt2R &&sel1R && {msgtag}} */}
            </div>
        </>
    );
}
export default MyForm;