type DeepArray<T>  =T| DeepArray<T>[];
export function deepcopy<T>(arr:DeepArray<T>):DeepArray<T>{
    let newarr:DeepArray<T>[]=[];
    if(Array.isArray(arr)){
    for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
    newarr.push(deepcopy(arr[i]) as DeepArray<T>) 
    }
    else{
    newarr.push(arr[i])
    }
}
}

    return newarr
}
