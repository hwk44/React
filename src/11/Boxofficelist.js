import { useState, useEffect, useRef } from "react";
import Boxofficecontent from "./Boxofficecontent";

const Boxofficelist = ({ targetDt }) => {

    console.log(targetDt)
    // const daylist = [];

    const [mvcont, setMvcont] = useState();

    const [mvsel, setMvsel] = useState();
    const showdetail = (k) => {
        setMvsel(k);
    
 // state 함수 변경
    }

    let dayli = useRef();

    // useEffect(() => {
    //     let temp = dayli.current.map((k) => [k.rank, k.movieNm, k.audiCnt, k.movieCd])
    //             console.log(temp);

    //             temp = temp.map((k) => 
                 
    //                     <div key={k[3]} className="divcont" onClick={() => showdetail(k[3])}>
    //                     <span className="sp0">{k[0]}</span>
    //                     <span className="sp1">{k[1]}</span>
    //                     <span className="sp2">{k[2]}</span>
    //                     </div>
    //             )
    //             setMvcont(temp);
        
    // },[mvsel])



    useEffect(() => {
        const apikey = 'f5eef3421c602c6cb7ea224104795888';
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
        url = url + `key=${apikey}`;
        url = url + `&targetDt=${targetDt}`;

        console.log(url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                const daylist = data.boxOfficeResult.dailyBoxOfficeList;
                console.log(daylist)

                dayli.current = daylist; // ref 변수에 daylist 저장
                console.log(dayli.current)

                let temp = daylist.map((k) => [k.rank, k.movieNm, k.audiCnt, k.movieCd])
                console.log(temp);

                temp = temp.map((k) => 
                 
                        <div key={k[3]} className="divcont" onClick={() => showdetail(k[3])}>
                        <span className="sp0">{k[0]}</span>
                        <span className="sp1">{k[1]}</span>
                        <span className="sp2">{k[2]}</span>
                        </div>
                )
                setMvcont(temp);

            })
            .catch((err) => console.log("ERROR", err));
    }, [targetDt])

    return (
        <>
            <div className="divlist">
                <div className="divlist1">
                    <div>
                        <span className="sp0">순위</span>
                        <span className="sp1">영화 제목</span>
                        <span className="sp2">관객수</span>
                    </div>
                </div>
                <div className="divlist2">
                    {targetDt && mvcont}

                </div>
            </div>
            {mvsel && <div className="detail">
                <Boxofficecontent mvsel={mvsel} setMvsel={setMvsel} />
            </div>}
        </>
    );
}
export default Boxofficelist;