import React,{Component} from 'react';
import './footer.css'

class Footer extends Component{
	constructor(){
		super()
	}
	render(){
		return(
			<footer className='shop_footer'>
				<div className='shop_footer_box'>
					<span className='shopping_footer  isNumNone' data-quantity={this.props.num}></span>
					<div className='shopping_footer_middle'>
						<p className='shop_price'>
							<span>¥0</span>
						</p>
						<p className='kd_price'>{this.props.data.piecewise_agent_fee}</p>
					</div>
					<a href="javascript:void(0)" className='shoping_submit isdisable'>
						<span>还差¥{this.props.data.float_minimum_order_amount}起送</span>
					</a>
				</div>
			</footer>
		)
	}
}

export default Footer;