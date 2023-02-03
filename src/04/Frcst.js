import "./Frcst.css"
import "./Frcheader"
import Frcheader from "./Frcheader";
import Frccn from "./Frccn";
import Frcdt from "./Frcdt";
import { useEffect, useState } from "react";

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
        // console.log("아이템1",items[0]["frcstFourDt"])

        let fcrdt = [ "frcstOneDt","frcstTwoDt","frcstThreeDt", "frcstFourDt"]; // 날짜 정보만 담는 배열
        let fcrcn = ["frcstOneCn","frcstTwoCn", "frcstThreeCn",  "frcstFourCn"]; // 예보 정보를 담는 배열

        // 예보 일자별 배열 추출
        // let dt = fcrdt.map((v) => v.includes('One')? 1 :0);
        fcrdt = fcrdt.map((k) => items[0][k]);
        fcrcn = fcrcn.map((k) => items[0][k]);
        
        // console.log("fcrdt = ", fcrdt) // key
        // console.log("fcrcn = ", fcrcn) // value
        
        // 일자별 예보 오브젝트
        // for(let [k,v] of Object.entries(fcrdt))  // 오브젝트 엔트리
        // {
        //     console.log("k = ", k, "v = ", v , fcrcn[k] )
        // }

        // let sum = new Object();
        let sum = {};
        for(let [k,v] of fcrdt.entries())  // 배열.엔트리
        {
            sum[v] = fcrcn[k]
            // console.log("k = ", k, "v = ", v, fcrcn[k])
        }
        // console.log("sum" ,sum)
        
        // let sum = new Object();
        // for(let i = 0; i < fcrcn.length; i++){
        //     sum[fcrdt[i]] = fcrcn[i] 
        // }
        // console.log(sum)
        
        /*내가 한 방법 .. 근데 날씨 정보가 순서대로 되지가 않음
        let fcrdt = []; // 날짜 정보만 담는 배열
        let fcrcn = []; // 나머지 정보를 담는 배열
        let temp = [];
        temp = Object.values(items[0]);
        
        console.log(temp);
        for(let i of temp){
            if(i.includes("2023")){
                fcrdt.push(i)
            }else{
                fcrcn.push(i)
            }
        }
        console.log(fcrdt);
        fcrdt.sort();
        
        console.log(fcrdt);
        console.log(fcrcn);
        */

        let [cn, setcn] = useState(fcrcn[0]);
        let [dt, setdt] = useState();
        // setcn();


        useEffect(() => {
            // console.log("userEffect" , sum[dt]);
           sum[dt] && setcn(sum[dt])
        }, [dt]);

        // useEffect(() => {  // 처음 초기에 아무것도 없이 하려면?
        //     setcn('')
        //     return(
        //         console.log("")
        //     );
        // }, []);


        console.log(dt);
    return (
        <div> 
            <Frcheader />
            {/* <p>{dt}</p> */}
            <div className="main">
                <Frcdt fcrdt = {fcrdt} setdt = {setdt} /> 
                {dt && <Frccn cn = {cn} dt = {dt}/> } 
            </div>
        </div>
         
    ) ;
}
export default Frcst ;