/*
  Checkbox 함수

  개별 체크가 모두 true 경우 -> 모든 체크 true
  
  * 중요 : 팝업창 닫기, 검색, 초기화 버튼 등등... listCheck 초기화 하기

  @ mapData : check 값 ( id or name or no ...)
  @ listCheck : state
  @ setListCheck : setState
  @ all : 전체 체크
 */

export default function inputListCheck({
                                         mapData,
                                         listCheck,
                                         setListCheck,
                                         all,
                                         setMapData,
                                         mapList,
                                         carCode,
                                         setCheckedAll,
                                         type
                                       }) {
  const {checked} = event.target;
  let checkList = listCheck
  let newArr = [...mapList];

  // 전체 체크, 전체 체크 해제
  if (all) {
    if (checked) {
      document.querySelectorAll("[name=useCheck]").forEach(function (v, i) {
        newArr[i].checked = true;
      });
    } else {
      document.querySelectorAll("[name=useCheck]").forEach(function (v, i) {
        newArr[i].checked = false;
      });
    }

    for (var i = 0; i < mapList.length; i++) {
      checkList = checkList.filter(function (item) {
        if (type) {
          return item.userNo !== mapList[i].userNo;
        } else {
          return item.carCode !== mapList[i].carCode;
        }
      });
      if (checked) {
        checkList = checkList.concat(mapList);
      }
    }

    // for (var i = 0; i < mapList.length; i++) {
    //   if (checked) {
    //     if (dataList) {
    //       checkList = carCode.concat(mapList);
    //     } else {
    //       checkList = (mapList[i].userNo || mapList[i].carCode);
    //     }
    //   } else {
    //     checkList = checkList.filter(function (item) {
    //       // return item !== mapData[i].userNo || mapData[i].carCode;
    //       return item.carCode !== mapList[i].carCode;
    //     });
    //   }
    // }

  } else {
    // 체크박스 컨트롤
    var list = document.querySelectorAll("input[name=useCheck]");
    const idx = [].indexOf.call(list, event.target);
    let newArr = [...mapList];
    newArr[idx].checked = checked;

    let checkCount = 0;
    document.querySelectorAll("[name=useCheck]").forEach(function (v, i) {
      if (v.checked === false) {
        checkCount++;
      }
    });
    if (checkCount > 0) {
      // document.querySelector("[name=allCheck]").checked = false;
      setCheckedAll(false)
    } else if (checkCount === 0) {
      // document.querySelector("[name=allCheck]").checked = true;
      setCheckedAll(true)
    }

    if (checked) {
      checkList.push(mapData);
    } else {
      checkList = listCheck.filter(function (item) {
        if (type) {
          for (var i = 0; i < checkList.length; i++) {
            return item.userNo !== mapData.userNo;
          }
        } else {
          return item.carCode !== mapData.carCode;
        }
      });
    }
  }

  checkList = checkList.filter((v, i) => checkList.indexOf(v) === i);

  setMapData(newArr);
  setListCheck(checkList)
}