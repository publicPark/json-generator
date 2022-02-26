// 모든 조합 리스트
export const cartesian = (...args) => {
  let resultArr = []
  const max = args.length - 1
  const addMore = (curArr, i) => {
    for (let j = 0; j < args[i].length; j++){
      let nextArr = [...curArr, args[i][j]]
      if (i === max) resultArr.push(nextArr)
      else addMore(nextArr, i+1)
    }
  }
  addMore([], 0)
  return resultArr
}

// 그걸로 데이터 가공하기
export const formatData = (productList) => {
  return productList.map((p) => {
    return {
      combination: p,
      remainCount: 0
    }
  })
}