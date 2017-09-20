import React,{Component} from 'react'
import Header from '../../components/header/header.js'
import UnLogin from '../../components/order/unLogin/unLogin.js'

class Order extends Component{
	render(){
		return(
			<div>
				<Header but={'login'} title={'订单'}/>
				<UnLogin/>
			</div>
		)
	}
}

export default Order;