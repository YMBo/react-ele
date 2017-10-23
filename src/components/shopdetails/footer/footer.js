import React,{Component} from 'react';
import './footer.css'

class Footer extends Component{
	render(){
		return(
			<footer className='shop_footer'>
				<div className='shop_footer_box'>
					<span className={`${this.props.num===0?'isNumNone':''} shopping_footer`} data-quantity={this.props.num}></span>
					<div className='shopping_footer_middle'>
						<p className='shop_price'>
							<span>¥{this.props.allPirce}</span>
						</p>
						<p className='kd_price'>{this.props.data.piecewise_agent_fee}</p>
					</div>
					<a href="javascript:void(0)" className={`shoping_submit 
						${this.props.allPirce>=this.props.data.float_minimum_order_amount
						?'':'isdisable'}`}>
						{this.props.allPirce>=this.props.data.float_minimum_order_amount
						?<span>去结算</span>
						:<span>还差¥{this.props.data.float_minimum_order_amount-this.props.allPirce}起送</span>}
					</a>
				</div>
			</footer>
		)
	}
}

export default Footer;