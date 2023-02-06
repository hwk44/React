const Tc2 = ({selC2A, setSelC2}) => {

    
    //중분류가 클릭되었을때
    const showc2 = (i) => {
        console.log(i)
        setSelC2(i[1])
    }

    selC2A = selC2A.map((k) => 
    <div className={"tcard1"}
    key={k}
    onClick={() => showc2(k)}>{k[1]}</div>)
    // onClick ={() => showc2(k) }
    // className={k ===selC2A ? "tcardSel":"tcard1"}
    return(
        <>
        <div className="divmain">

            <div className="divh2">
                <h2>중분류</h2>
            </div>
            <div className="divbot">
                 {selC2A}
            </div>

        </div>
        </>
    );

}
export default Tc2;