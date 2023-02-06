import GalList from "./GalList";
import Galcontent from "./Galcontent";
import { useEffect, useState } from "react";
const Galm =({filti, arri}) => {

    
    // usestate 변수
    let [sellist, setSellist] = useState();

    // 사진 선택
    let [selpic, setSelPic] = useState(); 
    
    useEffect(() => {
        let i;
        for(let [k,v] of Object.entries(arri)){
            if(v.galTitle == sellist){
                // console.log(k,v)  
                // setSelPic(v.galWebImageUrl)
                // console.log(v.galWebImageUrl)
                i = v.galWebImageUrl
            }
            setSelPic(i)
            // console.log(setSelPic);
            // console.log(k.galWebImageUrl)
            // console.log("바뀌는 이미지 주소값",setSelPic)
        }
        // console.log(sellist)
    },[sellist])

    return(
        <>
        <div className="header"><h1>해결문제</h1></div>
            <div className="all">
            <GalList filti={filti} sellist={sellist} setSellist={setSellist}/>
            {sellist && <Galcontent arri={arri} selpic={selpic} setSelPic={setSelPic} sellist={sellist} setSellist={setSellist}/>}
            </div>
        </>
    );
}
export default Galm;