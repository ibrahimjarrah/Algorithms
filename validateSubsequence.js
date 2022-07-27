let a1 = [];
let a2 = [];
let array= [];
function validateSubsequence (a1,a2) {
    
    for (let j=0;j<= a1.length;j++){


        for (let i=0;i<= a2.length; i++){
            if (a2[i]===(a1[j])){
                array.push(a2[i]);
            }
        }
    }  
    console.log(array);  
}
validateSubsequence([2,3,1],[1,2,3,4]);