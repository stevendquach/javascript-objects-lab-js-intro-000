var recipes = {turkey: 'gravy', beef: 'burger'}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value })
}
 destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, {key: 'value'}) 
}
