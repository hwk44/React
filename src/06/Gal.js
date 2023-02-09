//한국관광공사_관광사진 정보_GW
// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=서비스키&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%eb%b6%80%ec%82%b0+%ec%b6%95%ec%a0%9c&_type=json
// galContentId	string  콘텐츠 아이디
// galContentTypeId	string 콘텐츠 타입 아이디
// galTitle	string 제목
// galWebImageUrl	string 웹용 이미지 경로
// galCreatedtime	string 등록일
// galModifiedtime	string 수정일
// galPhotographyMonth	string 촬영월
// galPhotographyLocation	string 촬영장소
// galPhotographer	string 촬영자
// galSearchKeyword	string 검색 키워드

import { useRef } from "react";
import Galm from "./Galm";
import "./Galm.css"
import data from "../db/data.json"

const Gal = () => {

  // 배열로 item을 가져옴 
  const arri = data.response.body.items.item;
  console.log("arri", arri); 

  // 항목에 들어가야하는 배열
  const filti = arri.map((k) => k.galTitle)
  console.log("filti ", filti)

 
  // 이미지 주소를 담은 배열
  // const arrimg = arri.map((k) =>k.galWebImageUrl)
  // console.log("arrimg ", arrimg)

  // 키워드 배열
  // const keyword = arri.map((k) =>k.galSearchKeyword)
  // console.log("keyword ", keyword)

  // 지역 배열
  // const location = arri.map((k) =>k.galPhotographyLocation)
  // 사진 작가
  // const photographer = arri.map((k) =>k.galPhotographer)



  return (
    <>
    
      <Galm filti={filti} arri={arri} />
    </>
  );
}

export default Gal;