let arr=[2,199,5,7,11,40,12];
let largest=0;
for(let i=1;i<=arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
}
console.log(largest);
