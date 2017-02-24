function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var stages = ["egg", "larvae", "pupa", "adult butterfly"]
  stages.forEach(callback)
  return stages
}

function doToArray(array, callback) {
  array.forEach(callback)
}