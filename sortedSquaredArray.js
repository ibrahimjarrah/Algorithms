
function sortedSquaredArray(array1){
    let array=[];
    array1.sort();
    for (let i=0;i<array1.length;i++){
        let mul= array1[i]*array1[i];
        array.push(mul);
        
      
    }
    
    console.log(array);

}


sortedSquaredArray([2,4,3,1,6,5]);