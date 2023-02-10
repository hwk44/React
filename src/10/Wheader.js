import { Link } from "react-router-dom";
const Wheader = ({ title }) => {
    return (
        <>
            <div className="wh">
                <h1>{title}</h1>
            </div>
            <div className="whbt"><Link to="/"><button className="bthome">HOME⤴</button></Link></div>

        </>
    );
}
export default Wheader;