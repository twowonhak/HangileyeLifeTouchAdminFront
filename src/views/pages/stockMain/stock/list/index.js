import React, {useEffect, useState} from "react";
import List from "../../../components/List";
import {listSelect} from "./list";
import {cdKeyList} from "../insert/insert";
import inputData from "../../../../../utiles/fun/inputData";

export default function StockList({searchData, setSearchData,isOpenList, info, setIsOpenDetailFun}) {

  const [dataList, setDataList] = useState([])
  const [cdList, setCdData] = useState({assetMain: [], assetSub: [], team: []})

  useEffect(() => {
    if (isOpenList) {
      listSelect(setDataList, searchData)
    }
  }, [isOpenList, searchData])

  useEffect(()=>{
    cdKeyList(setCdData)
  },[isOpenList])

  const columns = [
    {
      dataField: "key",
      text: "고유번호",
      sort: true,
    },
    {
      dataField: "assNm",
      text: "자산분류명",
      sort: true,
    },
    {
      dataField: "buil",
      text: "건물",
      sort: true,
    },
    {
      dataField: "floor",
      text: "층",
      sort: true,
    },
    {
      dataField: "team",
      text: "부서",
      sort: true,
    },
    {
      dataField: "place",
      text: "상세위치",
      sort: true,
    },
    {
      dataField: "userNm",
      text: "소유주",
      sort: true,
    },
    {
      dataField: "year",
      text: "구입년도",
      sort: true,
    },
    {
      dataField: "ip",
      text: "IP",
      sort: true,
    },
    {
      dataField: "ms",
      text: "오피스",
      sort: true,
    },
    {
      dataField: "hwp",
      text: "한글",
      sort: true,
    },
  ]

  const clear = () =>{
    setSearchData({
      assMainCd: '',
      assSubCd: '',
      buil: '',
      floor: '',
      team: '',
    });
  }

  const onInputDataAss = (e) => {
    const {value} = e.currentTarget;
    setSearchData({
      ...searchData,
      assMainCd: value,
      assSubCd: ''
    });
  }

  const onInputData = (e) => {
    inputData(e, searchData, setSearchData)
  }


  const Search = () => {
    return (
        <div>
          <label className="mr-3">
            재산분류_대:
            <select className="form form-control-sm ml-2" value={searchData.assMainCd} name={"assMainCd"}
                    onChange={onInputDataAss}>
              <option value={""}></option>
              {cdList.assetMain.map((value, index) => {
                return (<option key={index} value={value.assMainKey}>{value.assMainNm}</option>)
              })}
            </select>
          </label>
          <label className="mr-3">
            중:
            <select className="form form-control-sm ml-2" value={searchData.assSubCd} name={"assSubCd"}
                    onChange={onInputData}>
              <option value={""}></option>
              {cdList.assetSub.map((value, index) => {
                if (searchData.assMainCd === value.assMainKey)
                  return (<option key={index} value={value.assSubKey}>{value.assSubNm}</option>)
              })}
            </select>
          </label>
          <label className="mr-3">
            건물:
            <select className="form form-control-sm ml-2" value={searchData.buil} name={"buil"}
                    onChange={onInputData}>
              <option value={""}></option>
              <option value="M">본관</option>
              <option value="N">신관</option>
            </select>
          </label>
          <label className="mr-3">
            층:
            <select className="form form-control-sm ml-2" value={searchData.floor} name={"floor"}
                    onChange={onInputData}>
              <option value={""}></option>
              <option value={"B4"}>B4</option>
              <option value={"B3"}>B3</option>
              <option value={"B2"}>B2</option>
              <option value={"B1"}>B1</option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
              <option value={"6"}>6</option>
              <option value={"7"}>7</option>
              <option value={"8"}>8</option>
              <option value={"9"}>9</option>
              <option value={"10"}>10</option>
            </select>
          </label>
          <label className="mr-3">
            부서:
            <select className="form form-control-sm ml-2" value={searchData.team} name={"team"}
                    onChange={onInputData}>
              {
                cdList.team.map((value, index) => <option key={index} value={value.key}>{value.name}</option>)
              }
            </select>
          </label>
          <label className="mr-3">
            사용:
            <select className="form form-control-sm ml-2" value={searchData.useYn} name={"useYn"} onChange={onInputData}>
              <option value={""}></option>
              <option value={"Y"}>사용</option>
              <option value={"N"}>미사용</option>
              <option value={"D"}>폐기</option>
            </select>
          </label>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={clear}>초기화</button>
          {/*<button type="button" className="btn btn-outline-success btn-sm" onClick={()=>excelExport(searchData)}>엑셀</button>*/}
        </div>
    )
  }


  return (
      <>
        <List dataList={dataList} type={'radio'} info={info} columns={columns} title={"재고관리"}
              contents={""} setIsOpenDetailFun={setIsOpenDetailFun} search={<Search/>}/>
      </>
  )
}