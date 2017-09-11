import React,{Component} from 'react'
import Active from './active.js'
import './listItem.css'

class ListItem extends Component{
	
	render(){
		return(
			<section className='shoplist'>
				<section className='shoplist_item'>
					<div className='shoplist_img'>
						<div className='shoplist_logo'>
							<img src="//fuss10.elemecdn.com/0/26/029cb04aa32f59ed7482a4b66faefjpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="" />
						</div>
					</div>
					<div className='shoplist_main'>
						<section className="show_line">
							<h3 className='show_line_h3'>
								<span>永和大王（北京望京凯德店BJ077）</span>
							</h3>
							<ul className='show_supportWrap'>
								<li>宝</li>
								<li>票</li>
							</ul>
						</section>
						<section className="show_line show_line2">
							<div className='show_rateWrap'>
								<div className='show_star'></div>
								<span className='show_num'>4.7</span>
								<span className='show_num'>月售2535单</span>
							</div>
							<div className='show_kd'>
								<span>蜂鸟专送</span>
							</div>
						</section>
						<section className="show_line">
							<div className='show_money'>
								<span>¥20起送</span>
								<span>配送费¥5</span>
							</div>
							<div className='show_time'>
								<span>1.13km</span>
								<span>26分钟</span>
							</div>
						</section>
						<div className='line'></div>
						<section className="show_active">
							<Active/>
						</section>
					</div>
				</section>
			</section>
		)
	}
}

export default ListItem;