var recipes = {turkey: 'gravy', beef: 'burger'}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value })
}
 destructivelyUpdateObjectWithKeyAndValue(recipes, turkey, gravy) {
   return Object.assign({}, {turkey: 'cheery'}) 
}
