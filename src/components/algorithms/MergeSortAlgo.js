

// export function GetAnimationArray(array){
//     const animation =[];
//     if(array.length()<=1)   return array;
// }

export default function GetAnimationArray(array){
    const animationArray = [];
    const sortedArray = array;
    const len = array.length;
    // console.log(sortedArray);
    MergeSortAlgo(animationArray,sortedArray,0,len-1);
    // console.log(sortedArray);
    return animationArray;
}

function MergeSortAlgo(animationArray,array,startInd,endInd){
    if(endInd<=startInd)   return;
    const mid =Math.floor((endInd-startInd)/2)+startInd;
    MergeSortAlgo(animationArray,array,startInd,mid);
    MergeSortAlgo(animationArray,array,mid+1,endInd);
    // console.log(" array ",array);
    Merge(animationArray,array,startInd,mid,endInd);
}

function Merge(animationArray,array,startInd,mid,endInd){
    let i=startInd;
    let j=mid+1;
    const left = [];
    const right = [];
    let k=0;
    for(k=startInd;k<=mid;k++){
        // console.log(startInd,k);
        left.push(array[k]);
    }
    for(k=mid+1;k<=endInd;k++){
        right.push(array[k]);
    }
    // console.log(left.length,right.length);
    k=startInd;
    while(i <= mid && j <= endInd){
        // console.log(i,j);
        if(left[i-startInd] <= right[j-mid-1]){
            animationArray.push([i,j]);
            animationArray.push([i,j]);
            animationArray.push([k,left[i-startInd]]);
            array[k++]=left[i-startInd];
            i++;
        }
        else{
            animationArray.push([i,j]);
            animationArray.push([i,j]);
            animationArray.push([k,right[j-mid-1]]);
            array[k++]=right[j-mid-1];
            j++;
        }
    }
    while(i<=mid){
        animationArray.push([i,i]);
        animationArray.push([i,i]);

        animationArray.push([k,left[i-startInd]]);
        array[k++]=left[i-startInd];
        i++;
    }
    while(j<=endInd){
        animationArray.push([j,j]);
        animationArray.push([j,j]);
        animationArray.push([k,right[j-mid-1]]);
        array[k++]=right[j-mid-1];
        j++;
    }

}

