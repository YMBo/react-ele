// action types
const LOGIN='LOGIN';
const LOGOUT='LOGOUT';

//reducer
export default function(state,action){
	if(!state){
		state={
			loginPart:{islogin:false,name:'',phone:0},
			allSelected:{}
		}
	}
	switch(action.type){
		case LOGIN:
			return{
				...state,
				loginPart:{...action.data}
			}
		case LOGOUT:
			return{
				...state,
				loginPart:{islogin:false,name:'',phone:0}
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
/*登出*/
export const logout=(data)=>{
	return{
		type:'LOGOUT',
	}
}