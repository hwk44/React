import Tc1 from "./Tc1"
import Tc2 from "./Tc2"
import Tdata from "./Tdata"
import Theader from "./Theader"
import "./Taccident.css"
import { useEffect,useState } from "react"


const Taccidentm = ({c1, c2, data}) => {
    // console.log("c1 = ",c1)
    // console.log("c2 = ",c2)
    // console.log(data)

    
    // 선택된 대분류 selC1
    let [selC1, setSelC1] = useState();

    // 선택된 대분류에 해당하는 중분류 저장
    let [selC2A, setSelC2A] = useState([]); // 배열 형태

    // 선택된 중분류
    let [selC2, setSelC2] = useState();
    // let [selc2, setselc2] = useState();

    // data 저장
    let [selData, setSelData] = useState({});  // 오브젝트 형태
    
    // state변수 변경
    // state c1 변수 변경 될때마다 실행
    useEffect(() => {
        console.log(selC1)
        setSelC2A(c2.filter((i) => i[0] === selC1))
    },[selC1]);

    useEffect(() => {
        console.log("selC2A",selC2A )
    }, [selC2A])

    useEffect(() => {
        console.log("selC2", selC2)
        if (selC1 && selC2) {
            setSelData(data.filter((i) =>
            i.사고유형_대분류 === selC1 &&
            i.사고유형_중분류 === selC2
            )[0])
        }
    },[selC2])

    // useEffect (() => {
    //     console.log("selData", selData)
    //     // setSelData()
    // },[selData])

    
    return(
        <>
        <div className="content">
                <Theader />
                <div className="main">
                    <Tc1 c1={c1} selC1={selC1} setSelC1={setSelC1} />
                    {selC2A && <Tc2 selC2A={selC2A}  selC2={selC2} setSelC2={setSelC2}/>}
                    {selData && <Tdata selData ={selData} setSelData = {setSelData}/>}
                </div>
        </div>

        </>
    );

}
export default Taccidentm;