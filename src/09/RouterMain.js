import RouterHome from "./RouterHome";
import RouterNv from "./RouterNv";
import RouterPage1 from "./RouterPage1";
import RouterPage2 from "./RouterPage2";

import { Route, Routes } from "react-router-dom";

/*페이지 이동이 아닌 부분 RouterNv*/
/*페이지 이동이 되는 부분 나머지*/
const RouterMain = () => {
    return (
        <>
            <RouterNv />
            <Routes>
                <Route path="/" element={<RouterHome />} />
                <Route path="/p1/:item" element={<RouterPage1 />} />
                <Route path="/p2" element={<RouterPage2 />} />
            </Routes>
        </>
    );
}
export default RouterMain;
