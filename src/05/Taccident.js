import Taccidentm from "./Taccidentm";

const Taccident = () => {
    const apiData = {
        "currentCount": 15,
        "data": [
          {
            "경상자수": "7488",
            "부상신고자수": "701",
            "사고건수": "17544",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "횡단중",
            "사망자수": "883",
            "중상자수": "9649"
          },
          {
            "경상자수": "1475",
            "부상신고자수": "161",
            "사고건수": "3059",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "차도통행중",
            "사망자수": "146",
            "중상자수": "1425"
          },
          {
            "경상자수": "1754",
            "부상신고자수": "202",
            "사고건수": "2872",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "길가장자리구역통행중",
            "사망자수": "80",
            "중상자수": "994"
          },
          {
            "경상자수": "1239",
            "부상신고자수": "121",
            "사고건수": "2188",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "보도통행중",
            "사망자수": "45",
            "중상자수": "1005"
          },
          {
            "경상자수": "13049",
            "부상신고자수": "1743",
            "사고건수": "24652",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "기타",
            "사망자수": "689",
            "중상자수": "10584"
          },
          {
            "경상자수": "6506",
            "부상신고자수": "590",
            "사고건수": "5840",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "정면충돌",
            "사망자수": "259",
            "중상자수": "3991"
          },
          {
            "경상자수": "63749",
            "부상신고자수": "5446",
            "사고건수": "56935",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "측면충돌",
            "사망자수": "555",
            "중상자수": "23105"
          },
          {
            "경상자수": "61766",
            "부상신고자수": "4576",
            "사고건수": "43028",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "추돌",
            "사망자수": "504",
            "중상자수": "15068"
          },
          {
            "경상자수": "60009",
            "부상신고자수": "5793",
            "사고건수": "56378",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "기타",
            "사망자수": "596",
            "중상자수": "21548"
          },
          {
            "경상자수": "2572",
            "부상신고자수": "769",
            "사고건수": "4292",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "공작물충돌",
            "사망자수": "462",
            "중상자수": "2442"
          },
          {
            "경상자수": "369",
            "부상신고자수": "74",
            "사고건수": "673",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "도로이탈",
            "사망자수": "144",
            "중상자수": "457"
          },
          {
            "경상자수": "13",
            "부상신고자수": "5",
            "사고건수": "28",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "주/정차차량 충돌",
            "사망자수": "5",
            "중상자수": "15"
          },
          {
            "경상자수": "809",
            "부상신고자수": "353",
            "사고건수": "1558",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "전도전복",
            "사망자수": "226",
            "중상자수": "886"
          },
          {
            "경상자수": "2577",
            "부상신고자수": "541",
            "사고건수": "4503",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "기타",
            "사망자수": "168",
            "중상자수": "1876"
          },
          {
            "경상자수": "0",
            "부상신고자수": "0",
            "사고건수": "2",
            "사고유형_대분류": "철길건널목",
            "사고유형_중분류": "기타",
            "사망자수": "0",
            "중상자수": "2"
          }
        ],
        "matchCount": 15,
        "page": 1,
        "perPage": 20,
        "totalCount": 15
      } ;

      // console.log(apiData)
      let c1, c2, data, temp ; 
      
      // for (let item in apiData) { // ??? 여기서는 왜 in을 쓰지?>
        // console.log("오브젝트 순회" , item)
      // }
     
      // data를 먼저 만듦
      data = apiData.data // 접근자 사용 Object.key
      // data = {apiData[1]} >> 이거는 오브젝트
      // console.log(data) // Array
      
      // c1 [대분류 4개]
      c1 = data.map((k) => // 사고유형_대분류 
       k["사고유형_대분류"] )
      // console.log("c1" , c1)
      // const make = (i) => {
      //   <div>{c1[i]}</div>
      // }


      c1 = new Set(c1) // 중복 제거  Set 을 통해서 {'차대사람', '차대차', '차량단독', '철길건널목'}
      c1 = [...c1] // Set을 다시 배열로 바꾸어야함
      // console.log("c1",c1)

      // c2[대분류, 중분류] 강의내용
      c2 = [];
      for(let item of data) {
        temp = [];
        temp.push(item.사고유형_대분류);
        temp.push(item.사고유형_중분류);
        c2.push(temp);
      }
      // console.log("c2" , c2)
      
      

      // 내 방법 2개 배열을 만들고 하나의 오브젝트로 합치기 reduce 함수를 써야 하는데 스킵..
      // temp = data.map((k) => k.사고유형_대분류);
      // c2 =  data.map((k) => k.사고유형_중분류);
      // c2 = temp.reduce()
  
    return (
        <>
          <Taccidentm c1={c1} c2={c2} data ={data}/>
          
        </>
    ) ;
}

export default Taccident ;