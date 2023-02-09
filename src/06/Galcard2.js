// WebImageUrl(이미지 url) , Title(작품제목), Month(6자리 숫자), Photographer, SearchKeyword

const GalCard2 = ({ info }) => {

    // cardId

    return (
        <div className="concard">
            <div><img src={info.WebImageUrl} /></div>
            <div>{info.Title}</div>
            <div className="conkw">
                {info.Month.substr(0, 4)}.
                {info.Month.substr(2, 2)}
            </div>
            <div className="conkw">{info.Photographer}</div>
            <div className="conkw">{info.SearchKeyword}</div>
        </div>
    );
}

export default GalCard2;
