import { useParams } from "react-router-dom";

const RouterPage1 = () => {
    const item = useParams().item;
    console.log(item);

    const fruits = ['사과🍎', '바나나🍌'];
    let tag = fruits.includes(item) ? <h3>과일입니다.</h3> : <h3>과일이 아닙니다.</h3>

    return (
        <>
            <h1>Page1</h1>
            {/* {(fruits.includes(item))
            ? <h2>{item}은 과일입니다.</h2> : <h2>{item}은 과일이 아닙니다.</h2>} */}
            {tag}
        </>
    );
}
export default RouterPage1;
