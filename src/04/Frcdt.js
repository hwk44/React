

const Frcdt = ({dt, setdt}) => { // 파라미터를 setDt인 함수를 속성값으로 보냄
    // console.log("dt",dt, setdt)
    let dtdiv1Tag = [...dt];

    const show =(k) => {
        // console.log("show", k)
    }

    dtdiv1Tag = dtdiv1Tag.map(  // 맵 함수로 div를 생성하는 함수를 만듬 아래 div className="box1"에서 함수사용
        (k) => <div className="dtdiv1" key={k} onClick={ () => show(k)} >{k}</div>   );
         
    // console.log(dtdiv1Tag)
    
    return (
        <div className="box1">
            {dtdiv1Tag}
        </div>
    );
}
export default Frcdt;