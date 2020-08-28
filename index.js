var recipes = {turkey: 'gravy', beef: 'burger'}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   obj[key]= value
   return obj
}
