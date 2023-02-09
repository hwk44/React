const GalCard = ({ selitem }) => {

    // cardId

    return (
        <div className="concard">
            <div><img src={selitem.galWebImageUrl} /></div>
            <div>{selitem.galTitle}</div>
            <div className="conkw">
                {selitem.galPhotographyMonth.substr(0, 4)}.
                {selitem.galPhotographyMonth.substr(2, 2)}
            </div>
            <div className="conkw">{selitem.galPhotographer}</div>
            <div className="conkw">{selitem.galSearchKeyword}</div>
        </div>
    );
}

export default GalCard;