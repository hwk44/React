import Asyncall from "./Asyncall";


const Async = () =>{ 

    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230214";

    fetch(url)
    // .then((resp) => console.log("response",resp)) // fulfield 일때 실행
    .then((resp) => resp.json())
    .then((data) => console.log("data",data))
    .catch((err) => console.log("ERROR",err)) // rejected 일때 실행

    // console.log(p);

    return (
        <>
         <Asyncall />
        </>
    );
}
export default Async;