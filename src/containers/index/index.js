import React, { Component } from 'react';
import Headersmart from './header.js'
import Search from '../../components/index/search/search.js'
import Hotsmart from './hot.js'
import Bannersmart from './banner.js'
import H3title from '../../components/index/title/h3title.js'
import ListItem from './listItem'
import ReturnTop from '../../components/index/returnTop/returnTop.js'
import ShoppingCart from '../../components/index/shoppingCart/ShoppingCart.js'
import { connect } from 'react-redux'
import { login } from '../../reducers/dataState.js'

class Index extends Component{
	/*保存登录状态*/
	componentWillMount(){
		let localstate=this._getLocal('islogin');
		if(localstate){
			this.props.onLogin(localstate)
		}
		console.log(this.props.data2)
	}
	_getLocal(name){
		return JSON.parse(localStorage.getItem(name))
	}
	render(){
		return(
			<div className='wrapper'>
				<Headersmart/>
				<Search/>
				<Hotsmart/>
				<Bannersmart/>
				<H3title/>
				<ListItem/>
				<ReturnTop/>
				<ShoppingCart/>
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return{
		data:state.loginPart,
		data2:state
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		onLogin:(data)=>{
			dispatch(login(data))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Index);
