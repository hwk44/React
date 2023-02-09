
const GalList = ({ filti, sellist, setSellist, keyword }) => {


    // const txt1R = useRef();
    const showimg = (i) => {
        // console.log("선택된 작품명 = ", i)
        setSellist(i)
    }

    keyword = keyword.map((k) =>
        <div key={k} className={k === sellist ? "listlisel" : "listli"} onClick={() => showimg(k)}>{k}</div>
    )

    //{style: "cursor: pointer"}
    return (
        <>

            <div className="divlist">
                <div>
                    {keyword}
                </div>
            </div>
        </>
    );

}
export default GalList;