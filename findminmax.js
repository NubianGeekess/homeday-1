function findMinMax(arr) {  
  var newArr = [];
  arr = arr.sort(function(a,b){
    return a - b;
  })
  if(arr[0] === arr[arr.length-1]){
    newArr.push(arr[0]);
  }
  else{
    newArr.push(arr[0], arr[arr.length-1]);
  }
  
  return newArr;
}
