// action types
const LOGIN='LOGIN';


//reducer
export default function(state,action){
	if(!state){
		state={loginPart:{islogin:false,name:'',phone:0}}
	}
	switch(action.type){
		case LOGIN:
			return{
				loginPart:{...action.data}
			}
		default:
			return state;
	}
}

/*登录*/
export const login=(data)=>{
	return{
		type:'LOGIN',
		data
	}
}