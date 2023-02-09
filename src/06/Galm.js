import GalList from "./GalList";
import Galcontent from "./Galcontent";
import { useEffect, useRef, useState } from "react";

const Galm = ({ filti, arri }) => {

    // 검색어값을 받는 txt1R
    const txt1R = useRef();

    // keyword 배열을 state 변수로 선언 
    const [keyword, setKeyword] = useState([]);

    // 맨 처음 포커싱, 전체가 다 보이도록 하려면 keyword를 전체로 해둠
    useEffect(() => {
        txt1R.current.focus();
        setKeyword(filti);
    }, [])

    // keyword 배열을 state 변수로 바꾸어야함
    const showC1 = () => {
        // console.log(txt1R.current.value)
        setKeyword(filti.filter((i) => i.includes(txt1R.current.value))); // 키워드를 포함하는 값들만 저장해서 keyword로 넘김
        // console.log("keyword 배열",keyword)
    }

    // 취소 버튼을 눌렀을 때 처음 화면이 보이도록 keyword를 전체로, sellist를 초기화
    const resetAll =() =>{
        setKeyword(filti);
        setSellist();
    }

    // usestate 변수
    let [sellist, setSellist] = useState();

    // 사진 선택
    let [selpic, setSelPic] = useState();

    useEffect(() => {
        let i;
        for (let [k, v] of Object.entries(arri)) {
            if (v.galTitle == sellist) {  // 타이틀이 맞는 녀석이라면
                i = v.galWebImageUrl // url 값을 저장한다.
            }
            setSelPic(i)
        }
    }, [sellist])

    // useEffect(() => {
    //     console.log(txt1R.current.value)
    // },[keyword])

    return (
        <>
            <div className="header">
                <h1>해결문제</h1>
            </div>
            <form name="myform" className="divform">
                <label htmlFor="txt1">검색 키워드 : </label>
                <input ref={txt1R} type="text" name="txt1" id="txt1" placeholder="키워드 입력" onChange={showC1} />
                <input className="button" type="reset" value="취소" onClick={resetAll}/>
            </form>
            <div className="all">
                {keyword && <GalList filti={filti} sellist={sellist} setSellist={setSellist} txt1R={txt1R} keyword={keyword} />}
                {sellist &&  <Galcontent arri={arri} selpic={selpic} sellist={sellist} setSellist={setSellist} />}
            </div>
        </>
    );
}
export default Galm;