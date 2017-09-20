import React,{Component} from 'react'
import './afterLogin.css'

class LoginList extends Component{
	render(){
		return(
			<a href="/" className='afterLogin'>
				<div className='afterLogin_body'>
					<div className='afterLogin_body_head'>
						<img src="https://fuss10.elemecdn.com/f/0a/106e89ecdd5bb3bce4fc137aab54dpng.png?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="登陆后列表"/>
					</div>
					<div className='afterLogin_body_sub'>
						<div className='afterLogin_body_sub_head'>
							<div className='afterLogin_title'>
								<p className='afterLogin_shop'>壹杯鲁肉饭（天安门店）</p>
								<p className='afterLogin_ok'>订单已完成</p>
							</div>
							<p className='afterLogin_time'>2017-09-08 10:51</p>
						</div>
						<div className='afterLogin_dsc'>
							<p className='afterLogin_dsc_foods'>
								<span>壹杯卤肉饭+鲜蔬盒+赠饮</span>
								<span>等2件商品</span>
							</p>
							<p className='afterLogin_dsc_price'>¥26.30</p>
						</div>
						<div className='shop_again'>
							<button>
								再来一单
							</button>
						</div>
					</div>
				</div>
			</a>
		)
	}
}

export default LoginList