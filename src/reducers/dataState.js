// action types
const LOGIN='LOGIN';
const LOGOUT='LOGOUT';
/*选中商品*/
const ADD_SELECTED_GOODS='ADD_SELECTED_GOODS';
const DELETE_SELECTED_GOODS='DELETE_SELECTED_GOODS';
/*初始化选中商品*/
const INIT_SELECTED_GOODS = 'INIT_SELECTED_GOODS'

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
		case INIT_SELECTED_GOODS:
			return{
				...state,
				allSelected:{...action.selected}
			}
		case ADD_SELECTED_GOODS:
			return{
				...state,
				allSelected:{
					...state.allSelected,
					...action.selected
				}
			}
		case DELETE_SELECTED_GOODS:
			return{
				...state,
				allSelected:{...action.selected}
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
/*初始化选中商品*/
export const initSelectedGoods=(selected)=>{
	return{
		type:'INIT_SELECTED_GOODS',
		selected
	}
}
/*添加商品*/
export const addSelectedGoods=(selected)=>{
	return{
		type:'ADD_SELECTED_GOODS',
		selected:selected
	}
}
/*删除商品*/
export const deleteSelectedGoods=(selected)=>{
	return{
		type:'DELETE_SELECTED_GOODS',
		selected
	}
}