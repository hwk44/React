import { useLocation } from "react-router-dom";
import qs from "query-string";

const RouterPage2 = () => {
    let location = useLocation().search;
    console.log("location", location)
    
    let item = qs.parse(location).item;
    console.log(item);

    const fruits = ['사과🍎', '바나나🍌'];
    let tag = fruits.includes(item) ? <h3>{item}과일입니다.</h3> : <h3>{item}과일이 아닙니다.</h3>

    return (
        <>
        <h1>Page2</h1>
        {tag}
        </>
    );
}
export default RouterPage2;
