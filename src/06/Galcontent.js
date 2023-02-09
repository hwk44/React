
const Galcontent = ({ arri, sellist, selpic}) => {

    // let human, location, date;
   
    
    // console.log("arri의 엔트리",Object.entries(arri))

    // for(let k of Object.values(arri)) {
    //     console.log("value",k)
    //     if(k.galTitle == sellist) {

    //     }
    // }
    // console.log("arri의 밸류들",Object.values(arri))
    
    let temp = [];
    temp.push(<img src={selpic} alt=""/>)
    temp.push(arri.map((k) => (k.galWebImageUrl===selpic)? k.galSearchKeyword : ""))
    for(let k of Object.values(arri)) {
        // console.log("value",k)
        if(k.galTitle === sellist) {
            temp.push(k.galPhotographyLocation)
            temp.push(k.galPhotographer)
            temp.push(k.galPhotographyMonth);
        }
    }
    // console.log(temp)

    // date = date.slice(0,6)
    // console.log(date)
    return (

        <div className="divcontent">

            <div className="contentimg">
                {temp[0]}
            </div>
            <div className="contentdetail">
                <h2>{sellist}</h2>
                <h3>{temp[2]}</h3>
                <h3>{temp[3]}</h3>
                <h4>{temp[4]}</h4>
                    {temp[1]}
            </div>
        </div>
    );

}
export default Galcontent;