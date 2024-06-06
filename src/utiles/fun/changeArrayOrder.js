export const changeArrayOrder = function (arr, key, indexNum) {
// 이동시키려는 객체의 인덱스를 찾습니다.
  let fromIndex = arr.findIndex(obj => obj.key === key);

// 찾은 객체를 배열에서 제거합니다.
  let [item] = arr.splice(fromIndex, 1);

// 새로운 위치에 객체를 삽입합니다.
  arr.splice(fromIndex + indexNum, 0, item);

  for(let i = 0; i < arr.length; i++){
    arr[i].sort = i + 1
  }
  return arr
};

