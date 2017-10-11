import React,{Component} from 'react';
import './footer.css'

class Footer extends Component{
	render(){
		return(
			<footer className='shop_footer'>
				<div className='shop_footer_box'>
					<span className='shopping_footer  isNumNone' data-quantity='0'></span>
					<div className='shopping_footer_middle'>
						<p className='shop_price'>
							<span>¥6</span>
						</p>
						<p className='kd_price'>配送费¥5</p>
					</div>
					<a href="javascript:void(0)" className='shoping_submit isdisable'>
						<span>还差¥1起送</span>
					</a>
				</div>
			</footer>
		)
	}
}

export default Footer;