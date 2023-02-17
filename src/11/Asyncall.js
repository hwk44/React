import Asynchead from "./Asynchead";
import Asyncmaincont from "./Asyncmaincont";
import Asyncmainlist from "./Asyncmainlist";


const Asyncall = () => {


    return (
        <>
            <Asynchead />
            <div className="divmain">
                <Asyncmainlist />
                <Asyncmaincont />
            </div>
        </>
    );
}
export default Asyncall;