import Tc1 from "./Tc1"
import Tc2 from "./Tc2"
import Tdata from "./Tdata"
import Theader from "./Theader"
import "./Taccident.css"


const Taccidentm = ({c1, c2, data}) => {
    // console.log(c1)
    // console.log(c2)
    // console.log(data)
    return(
        <>
        <div className="content">
                <Theader />
                <div className="main">
                    <Tc1 />
                    <Tc2 />
                    <Tdata />
                </div>
        </div>

        </>
    );

}
export default Taccidentm;