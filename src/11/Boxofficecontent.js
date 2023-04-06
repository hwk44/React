import { useEffect, useState } from "react";


const Boxofficecontent = ({mvsel}) => {

    let [mvdetailTag, setmvdetailTag] = useState();
useEffect(() => {
    let url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${mvsel}`

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
    const movieinfo = data.movieInfoResult.movieInfo
    console.log(movieinfo)
    let temp = [];                                                                    
    temp.push("영화명 : " + movieinfo.movieNm);
    temp.push("개봉일 : " +movieinfo.openDt);
    temp.push("제작상태 : "+movieinfo.prdtStatNm);
    temp.push("영화 구분 : "+movieinfo.typeNm);
    console.log(temp)
    temp = temp.map((k, n) => {
        return <div key={++n} className="divdetail">{k}</div>;
    })
    setmvdetailTag(temp)
                    })
                
    .catch((err) => console.log(err))
}, [mvsel])

    return(
        <>
        {mvdetailTag}
        </>
    );
}
export default Boxofficecontent;