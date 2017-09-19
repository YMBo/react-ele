import React,{Component} from 'react'
import './unLogin.css'

class UnLogin extends Component{
	render(){
		return(
			<section className='order'>
				<img src="//fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif" alt="请登录"/>
				<h3>登录后查看外卖订单</h3>
				<button>立即登录</button>
			</section>
		)
	}
}

export default UnLogin;