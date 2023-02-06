
const GalList = ({filti, sellist,  setSellist}) => {

    const showimg =(i) => {
        console.log("선택된 작품명 = ",i)
        setSellist(i)
    }

    filti = filti.map((k) => 
    <div key={k} className={k === sellist ? "listlisel" :"listli"} onClick={() =>showimg(k)}>{k}</div>
    )

    return(
        <div className="divlist">
            {/* <h1>항목</h1> */}
            <div>
               {filti}
            </div>
        </div>
    );

}
export default GalList;