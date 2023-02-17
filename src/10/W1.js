import Wheader from "./Wheader";
import item from "../db/item.json"
import weather2 from "../db/weather2.json"
import { useState, useEffect } from "react";

const W1 = () => {
    // console.log("item", item)
    // console.log("weather2", weather2)

    // let w2 = weather2.response.body.items.item;
    // console.log("w2", w2);

    // w2 = w2.map((k) => {
    //      let temp = [];
    //      temp.push(item[k.category][0])
    //      temp.push(k.obsrValue)
    //      temp.push(item[k.category][1]) 
    //      return temp;
    // })
    // console.log(w2);



    // state 변수
    const [items, setItems] = useState(weather2.response.body.items.item);
    const [itemTag, setItemTag] = useState();

    //useEffect

    // 랜더링이 발생될 때(어떤 state 변수가 변경되더라도)마다 실행
    // useEffect( () => {} )

    // 맨 처음 랜더링 되었을 때
    useEffect(() => {
        console.log("weather2", weather2.response.body.items.item)

    }, []);

    // 특정 state 변수가 변경 시 실행
    useEffect(() => {
        if (!items) return;

        console.log("items", items)
        let temp = items.map((i, n) =>
            <div className="outw1div">
                <div className="w1div" key={"w1div" + n}>
                    <span className="sp0">{item[i.category][0]}</span>
                    <span className="sp1">{i.obsrValue}</span>
                    <span className="sp2">{item[i.category][1]}</span>
                </div>
            </div>
        );
        setItemTag(temp);
    }, [items]);



    return (
        <>
            <Wheader title={'일기예보 - 단기'} />
            {itemTag}
        </>
    );
}
export default W1;