export const listToTree = (list:Array<any>, param = 'id') =>{
  let info = list.reduce((map, node) => (map[node[param]] = node, node.children = [], map), {})
  return list.filter(node => {
    info[node.parentId] && info[node.parentId].children.push(node)
    return !node.parentId
  })
}

/* 

listToTree (list) {
  let info = list.reduce((map, node) => (map[node.id] = node, node.children = [], map), {})
  return list.filter(node => {
    info[node.parentId] && info[node.parentId].children.push(node)
    return !node.parentId
  })
}
*/
