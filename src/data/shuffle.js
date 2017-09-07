/*打乱数据*/
export const shuffle=(arr)=>{
	const arrLength=arr.length;
	for(let i=arrLength-1;i>=0;i--){
		let index=Math.floor(Math.random()*(i+1));
		[arr[i],arr[index]]=[arr[index],arr[i]];
	}
	return arr;
}