import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import qs from "query-string";

const RouterHome = () => {

    // let location = useLocation().search;
    // console.log("location", location)

    // let location = "https://n.news.naver.com/article/082/0001197468?cds=news_media_pc&type=editn";
    // location = location.split("?")[1]; // ? 뒷부분만 남기고 버림

    // // location을 오브젝트 형태로 변환해줌
    // let item =qs.parse(location);
    // console.log (item);

    const navigate = useNavigate();
    // const url ={
    //     "사과🍎" : "/p2?item=사과🍎",
    //    "바나나🍌" :"/p2?item=바나나🍌",
    //    "당근🥕" : "/p2?item=당근🥕"
    // }
    const gourl = (k) => {        
        let url = `/p2?item=${k}`;
        navigate(url); // url 오브젝트가 있는경우에는 url[k]
    
    }
    return (
        <>
            <h1>HOME</h1>

            <h2>파라미터 전송</h2>
            <ul>
                <li><Link to="/p1/사과🍎">사과🍎</Link></li>
                <li><Link to="/p1/바나나🍌">바나나🍌</Link></li>
                <li><Link to="/p1/당근🥕">당근🥕</Link></li>
            </ul>

            <h2>파라미터 전송2</h2>
            <button onClick={() => gourl("사과🍎")}>사과🍎</button>
            <button onClick={() => gourl("바나나🍌")}>바나나🍌</button>
            <button onClick={() => gourl("당근🥕")}>당근🥕</button>

        </>
    );
}
export default RouterHome;
