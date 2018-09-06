const arr = [
  89, 30, 25, 32 ,72 ,70, 51 ,42,25 ,24, 53, 55, 78, 50, 13, 
  40, 48, 32, 26, 2 ,14 ,33, 45, 72 ,56, 44, 21, 88, 27, 68 ,15 ,
  62, 93, 98 ,73, 28, 16, 46, 87 ,28, 65, 38, 67, 16, 85, 63, 23 ,
  69, 64, 91, 9 ,70 ,81, 27 ,97, 82, 6 ,88, 3,7 ,46, 13 ,11, 64, 76,
  31, 26, 38 ,28, 13 ,17,69 ,90, 1, 6 ,7, 64, 43 ,9, 73 ,80 ,98, 46 ,
  27, 22, 87, 49, 83, 6 ,39, 42 ,51, 54, 84 ,34, 53 ,78, 40, 14, 5];
// console.log(arr.length);
function swap(arr, i, x){
  //only when 2nd value is < 1st value
  const tmp = arr[i];
  arr[i] = arr[x];
  arr[x] = tmp;
}
function quickSort(arr, start = 0, end = arr.length){
  if(start === 265){
    console.log('!!!');
    return;
  }
  if (start >= end){
    return arr;
  }
  // console.log(start, end);
  const mid = partition(arr, start, end);
  arr = quickSort(arr, start, mid);//left side partition after initial sort
  arr = quickSort(arr, mid + 1, end); //right side partition after initial sort
  return arr;

}

function partition(arr, start, end){
  // console.log(start,' start', end, 'end');
  const pivot = arr[end -1];
  let x = start;
  for (let i = start; i < end - 1; i++){
    if(arr[i] <= pivot){
      swap(arr, i, x);
      x++;
    }
  }

  swap(arr, end-1, x);
  // console.log(x, 'x');
  return x;

}

function mergeSort(arr/* , count = 0 */){
  if(arr.length <=1){
    return arr;
  }
  const mid = Math.floor(arr.length/2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid, arr.length);

  left = mergeSort(left);
  right = mergeSort(right);
  // console.log(count);
  return merge(left, right, arr);
}

function merge(left, right, arr/* , counter = 0 */){
  let leftInd = 0;
  let rightInd = 0;
  let outputInd = 0; 

  while(leftInd  < left.length && rightInd < right.length){
    // counter ++;
    if(left[leftInd] < right[rightInd]){
      arr[outputInd++] = left[leftInd++];
    }
    else{
      arr[outputInd++] = right[rightInd++];
    }
  }
  for(let i = leftInd; i < left.length; i++ ){
    // counter ++;
    arr[outputInd++] = left[i]; 
  }
  for(let i = rightInd; i < right.length; i++){
    // counter ++;
    arr[outputInd++] = right[i];
  }
  return /* { */arr/* , counter} */;
}

function main(){
  // console.log(quickSort(arr));
  // console.log(arr.length);
  console.log(mergeSort(arr));
}

main();