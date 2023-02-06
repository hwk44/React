const Tdata = ({selData, setSelData}) => {

    // selData = selData.map((k) => 
    // <div key={k}>{k}</div>)
    // console.log("tdata", selData);

    let dataTag = [] ;
    for (let [k,v] of Object.entries(selData)){
        //console.log("k " , k,v)
        dataTag.push(<div className={"tcard1"} key={k}><span className="sp1">{k} -</span> <span className="sp2">{v}</span></div>)
    }

    console.log(dataTag)
    // const data = Object.entries(selData).map((k) => (k));
    // const data = selData[0].map((k) => <li>{k}</li>)
    // console.log(data);
    return(
        <>
        <div className="divmain">

            <div className="divh2">
                <h2>상세내용</h2>
            </div>
            <div className="divbot">
                {/* {data} */}
                {dataTag}
            </div>

        </div>
        </>
    );

}
export default Tdata;