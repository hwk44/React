import { useState } from "react";
import "./Frcst.css"
// import { useState }  from 'react';
const Frcst = () => {
    /* 공공데이터포털 : 한국환경공단_에어코리아_대기오염정보
    frcstOneCn : 첫째날예보
    frcstTwoCn : 둘째날예보
    frcstThreeCn : 셋째날예보
    frcstFourCn : 넷째날예보

    frcstOneDt : 첫째날예보일시
    frcstTwoDt : 둘째날예보일시
    frcstThreeDt : 셋째날예보일시
    frcstFourDt : 넷째날예보일시
    */

    // [] 배열기호
    // {} 오브젝트 기호 , key로 데이터 접근
    // NoSQL : 대표적으로 json

    const items = [
        {
        "frcstFourDt":"2023-02-05",
        "frcstThreeDt":"2023-02-04",
        "frcstTwoCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "gwthcnd":"2월 4일~5일은 중서부지역을 중심으로 국외 미세먼지가 유입되는 가운데 대기 정체로 축적되어 4일 인천· 경기남부·충남, 5일 인천·경기남부·충북·충남에서 미세먼지 농도가 '높음'일 것으로 예상됩니다.",
        "frcstTwoDt":"2023-02-03",
        "frcstFourCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 높음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstThreeCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstOneDt":"2023-02-02",
        "frcstOneCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 높음",
        "presnatnDt":"2023-01-30"
        }
        ];
        let item = items[0];
        
        // info 는 state 변수다 값을 바꾸는 것이 함수(setInfo)
        let [info, setInfo] = useState();
      
        const showInfo1 = (seldt) => {
            
            let infoArray;
            // let newinfoArray;
            // setInfo(info);
            // console.log(seldt);
            // eslint-disable-next-line default-case
            switch(seldt){
                case 1: infoArray = item.frcstOneCn.split(","); break;
                case 2: infoArray = item.frcstTwoCn.split(","); break;
                case 3: infoArray = item.frcstThreeCn.split(","); break;
                case 4: infoArray = item.frcstFourCn.split(","); break;
            }
            console.log(infoArray); // 배열이다.
            // infoArray = infoArray.map((ia)=> <li key={ia + seldt} className="lired">{ia}</li>);
            // infoArray = infoArray.map((v)=> v.includes("높음")?  // map 함수를 한줄만 써야 하므로 3항연산자 사용
            // <li key={v + seldt} className="lired">
            //     <span>{v.split(":")[0]}</span>
            //     <span>{v.split(":")[1]}</span>
            //     </li> :
            // <li key={v + seldt} className="liblack">{v}</li>
            // );

            // console.log()
            infoArray = infoArray.map((v)=>  
            <li key={v + seldt}> <span>{v.split(":")[0]}</span> (0.
                {
                v.includes("높음") ?
                <span className="lired">{v.split(":")[1]}</span> :
                <span >{v.split(":")[1]}</span>
                }
                )
                </li> 
            );
            console.log(infoArray); // 배열이다.
            setInfo(infoArray);
        };
        
    return (
        <div>
            <div className="header">
                <h1>미세먼지예보</h1>
            </div>

            <div className="main">
                <div className="box1">
                    <div className="dtdiv1" onClick={() => showInfo1(1)}>{item.frcstOneDt}</div>
                    <div className="dtdiv1"onClick={() => showInfo1(2)}>{item.frcstTwoDt}</div>
                    <div className="dtdiv1"onClick={() => showInfo1(3)}>{item.frcstThreeDt}</div>
                    <div className="dtdiv1"onClick={() => showInfo1(4)}>{item.frcstFourDt}</div>
                </div>
                <div className="box2">
                    <div className="detail">
                        <ul>{info}</ul>
                        </div>
                </div>
            </div>
        </div>
         
    ) ;
}

export default Frcst ;