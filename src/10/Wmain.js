import { Link } from "react-router-dom";
import Wheader from "./Wheader";
import Wmenu from "./Wmenu";
import W1 from "./W1";
import W2 from "./W2";
import "./Wmain.css"
import item from "../db/item.json"
import weather from "../db/weather.json"
import weather2 from "../db/weather2.json"

import { Route, Routes } from "react-router-dom";


const Wmain = () => {

    console.log("item",item)
    console.log("weather",weather)
    console.log("weather2",weather2)

    return (
        <>
            
            <Routes>
                <Route path="/" element={<Wmenu />}></Route>
                <Route path="/w1" element={<W1 item={item} weather={weather} weather2={weather2}/>}></Route>
                <Route path="/w2" element={<W2 item={item} weather={weather} weather2={weather2}/>}></Route>
            </Routes>
        </>
    );
}
export default Wmain;