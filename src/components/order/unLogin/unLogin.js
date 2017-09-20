import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './unLogin.css'

class UnLogin extends Component{
	render(){
		return(
			<section className='order'>
				<img src="//fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif" alt="请登录"/>
				<h3>登录后查看外卖订单</h3>
				<Link to="/login"><button>立即登录</button></Link>
			</section>
		)
	}
}

export default UnLogin;