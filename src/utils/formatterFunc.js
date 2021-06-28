
export function formatMenuData(list) {
  let tempList = [...list]
  // 先过滤出hidden的
  tempList = tempList.filter(ele => (ele.hidden != true))

  // 更改属性名（复制一个新的属性名称）
  const recursionFormatterChildren = (list1) => {
    list1.forEach((item, index) => {

      list1[index].label = item.name
      if(item.children) {
        recursionFormatterChildren(item.children)
      }
    })

  }
  recursionFormatterChildren(tempList)
  return tempList
}

export function filterHidden(list) {
  // 先过滤出hidden的
  return [...list].filter(ele => (ele.hidden != true))
}
