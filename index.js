
let recipes = []

function updateObjectWithKeyAndValue(object, key, value) {
<<<<<<< HEAD
  let newobject = {}
  newobject = Object.assign({}, object, {key, value});
  return object
}
//it does not modifythe original object, but rather returns a clone with the new data
// returns an object with the orignal key value pairs and the new key value pair:

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  let newObject = object
  return newObject
  }
  //updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:
  //destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {


function deleteFromObjectByKey(object, key) {
  var newobj = Object.assign({}, object);
  delete newobj[key]
  return newobj
}
/*
=======
  recipies
}

function updateObjectWithKeyAndValue(object, key, value) {
  
}
//it does not modifythe original object, but rather returns a clone with the new data



function deleteFromObjectByKey() {
  
}

>>>>>>> 584943599199d000565969f6d1c7f45cc8ff1771
var obj = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 
<<<<<<< HEAD
obj // { foo: 'bar' }
*/
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
} 
//returns object without the delete key/value pair:
//modifies the original object:
=======
obj // { foo: 'bar' }
>>>>>>> 584943599199d000565969f6d1c7f45cc8ff1771
