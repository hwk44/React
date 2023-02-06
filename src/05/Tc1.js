const Tc1 = ({c1, selC1, setSelC1}) => {

    // 대분류가 클릭되었을때
    const handleSelect =(i) => {
        console.log(i)
        setSelC1(i)
        
    }

    c1 = c1.map((k)=> // 맵함수로 버튼을 만듬
        <div key={k} className={k === selC1 ? "tcardSel" : "tcard1"} onClick={ () => handleSelect(k)} >{k}</div>) // k값을 받아서 handleSelect 함수로 받음

    return(
        <>
        <div className="divmain">
            
            <div className="divh2">
                <h2>대분류</h2>
            </div>
            <div className="divbot">
                {c1}
            </div>

        </div>
        </>
    );

}
export default Tc1;