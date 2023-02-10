import { Link } from "react-router-dom";

import Wheader from "./Wheader";

const Wmenu = () => {
    return (
        <>
            <Wheader title={'일기예보'} />
            <div className="divul">
                <ul className="ul">
                    <li><Link to="/w1">단기예보</Link></li>
                    <li><Link to="/w2">중기예보</Link></li>
                </ul>
            </div>
        </>
    );
}
export default Wmenu;