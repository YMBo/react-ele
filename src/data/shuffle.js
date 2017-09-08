/*打乱数据*/
export const shuffle=(arr)=>{
	const arrLength=arr.length;
	for(let i=arrLength-1;i>=0;i--){
		let index=Math.floor(Math.random()*(i+1));
		[arr[i],arr[index]]=[arr[index],arr[i]];
	}
	return arr;
}

/*切割数组*/
// arr 数组
// len 每一份长度
export const splitArr=(arr,len)=>{
	let arr_len=arr.length;
	let resultArr=[];
	for(let i=0;i<arr_len;i+=len){
		resultArr.push(arr.slice(i,i+len))
	}
	return resultArr;
}