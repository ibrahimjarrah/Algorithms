let array = [];
let targetSum= 15;
let finalArray = [];
midArray = [];
let sum = 0 ;

function twoNumSum(array){
    for (let i=0;i<=array.length;i++){
        if(array[i]<targetSum){
            sum+=array[i];
            midArray.push(array[i]);
            array.pop();

            if(sum === targetSum){
                finalArray.push(midArray);
                console.log(finalArray);
            
            }
  
        }
        for (let i=array.length;i<=array.length;i--){

            if(array[i]<targetSum){
                sum+=array[i];
                midArray.push(array[i]);
                array.pop();
                
                
                if(sum === targetSum){
                    finalArray.push(midArray);
                    console.log(finalArray);
                    break;
                }
       
            }
           
        }
    }
    
}


twoNumSum([2,3,4,6,5]);
