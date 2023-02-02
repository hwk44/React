import Mydiv21 from "./Mydiv21";

const Mydiv2 = ({user, n ,setN}) => {
    
    return(
        <div className="mydiv2">
        <h2 className="divh2">Mydiv2 {n} </h2>
        <Mydiv21 user={user} n={n} setN={setN} />
        </div>
        
    );

}
export default Mydiv2;