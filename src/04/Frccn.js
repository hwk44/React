const Fcrcn = ({cn, dt}) => {
    // console.log("cn",cn)
    let infoArray =cn.split(",");
    // console.log("info" , infoArray);
    // let seldt = 0;

    infoArray = infoArray.map((v)=>  
        <li key={v}> <span>{v.split(":")[0]}</span> (
            {
            v.includes("높음") ?
            <span className="lired">{v.split(":")[1]}</span> :
            <span >{v.split(":")[1]}</span>
            }
            )
        </li> 
    );

    // console.log(infoArray); // 배열이다.
    // setInfo(infoArray);
    return (
        <div className="box2">
                <div className="detail">
                    <ul>{infoArray}</ul>
                </div>
        </div>
    );
}
export default Fcrcn;