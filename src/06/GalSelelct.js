import data from "../db/data.json"
import GalCard from "./Galcard";
import GalCard2 from "./Galcard2";
import "./Galm1.css"
import { useRef, useState, useEffect } from "react";
const Galselect = () => {

    const item = data.response.body.items.item;
    console.log("item = ", item) // item 배열을 뽑아냄. 각각 오브젝트로 되어있음

    // 이미지 이름 카테고리 뽑아낸것. 배열
    const c1 = item.map((k) => k.galTitle);
    // console.log("c1 = ", c1)
    // console.log("c1.entries = ", c1.map((v,k) => console(v,k)))

    // let item0 = item[0];
    // console.log("item0",item0)

    // 배열 오브젝트 연습
    // console.log("item0",Object.keys(item0))
    // Object.keys(item0).map((v,k) => console.log(v,k))
    // Object.entries(item0).map((v) => console.log(v))

    // option 태그를 만들어내는 배열
    const c1Tag = c1.map((k) =>
        <option key={k} value={k}>{k}</option>
    );

    // selitem은 오브젝트임 초기에 오브젝트로 선언할수 있는데 그러면 태그 조건식에서 Object.keys(selitem).length > 0 && 를 붙여주어야 함
    // 랜더링 제어변수
    let [selitem, setSelItem] =useState();

    // select box 제어
    const selR = useRef();
    // console.log(selR.current.value);

    // 사용자 정의 함수 옵션 값이 바뀔때
    const handleSel = () => {
        console.log("onChange함수", selR.current.value)

        let temp = [];
        temp = item.filter((k) => k.galTitle === selR.current.value)
        console.log("onChange temp" , temp) // 배열로 뽑히는데 오브젝트로 바꾸어야함

        setSelItem(temp[0]);
        console.log("onChange selitem" , selitem)
    }

    // 컴포넌트가 처음 랜더링이 일어났을 때
    useEffect(() => {
        console.log(selR.current.value);
        selR.current.focus();
    }, [])

    // info 오브젝트(벤츠 자동차 관련)를 생성한 것임
    // WebImageUrl(이미지 url) , Title(작품제목), Month(6자리 숫자), Photographer, SearchKeyword
    // const info = {
    //     WebImageUrl: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20230206_1095%2Fupload_1675648342737lYmZi.jpg%22&type=nf340_228",
    //     Title: '벤츠 GLE SUV',
    //     Month: "20230204",
    //     Photographer : "CAR GUY",
    //     SearchKeyword : "메르세데스 벤츠 GLE SUV"
    // }
    // let keyval = 0;
    // const itemTag = item.map((k) => <GalCard item={k} key={++keyval} />)


    return (
        <>
            <div className="content">
                <form>
                    <select className="select" ref={selR} name="sel1" defaultValue={""} onChange={handleSel}>
                        <option value="">항목을 선택하세요.</option>
                        {c1Tag}
                    </select>
                </form>
                {/* {Object.keys(selitem).length > 0 && <GalCard selitem={selitem}/>} */}
                {selitem && <GalCard selitem={selitem}/>}

                {/* {itemTag} */}
                {/* <GalCard2 info={info}/> */}
            </div>
        </>
    );

}
export default Galselect;