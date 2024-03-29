import Mydiv1 from "./Mydiv1";
import Mydiv2 from "./Mydiv2";
import "./Mydiv.css"

import { useState } from "react";

const Mydiv = () => {  // 컴포넌트 = 사용자 정의 태그
    const rname = 'React!';
    
    let[n, setN] = useState(0);

    let addnum = () => {
        setN(++n);
    }
    

    return(
        <> 
        <div className="content">
            <div className="header">
                <h1 onClick={addnum} >컴포넌트 예제{rname} {n}</h1> 
            </div>
            <div className="main">
               <Mydiv1  user={rname} n={n} setN={setN} />
               <Mydiv2  user={rname} n={n} setN={setN} />
            </div>
        </div>
       </>
    );
}
export default Mydiv;