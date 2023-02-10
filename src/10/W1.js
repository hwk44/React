import Wheader from "./Wheader";
import item from "../db/item.json"
import weather2 from "../db/weather2.json"

const W1 = () => {
    console.log("item",item)
    console.log("weather2",weather2)

    let w2 = weather2.response.body.items.item;
    console.log("w2",w2);

    // let temp =[];
    w2 = w2.map((k) => {
         let temp = [];
         temp.push(item[k.category][0])
         temp.push(k.obsrValue)
         temp.push(item[k.category][1])
         
         return temp;
    })

    console.log(w2);

    // let temp = [];
    
    return (
        <>
            <Wheader title={'일기예보 - 단기'} />
            <div>
                <div>
                <span className="sp0">강수형태</span><span className="sp1">없음</span><span className="sp2"></span>
                </div>
                <div>
                <span>강수량</span><span>0</span><span>mm</span>
                </div>
                강수형태 : 없음
                강수형태 : 없음
                강수형태 : 없음
                강수형태 : 없음
            </div>
        </>
    );
}
export default W1;