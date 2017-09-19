import React,{Component} from 'react'
import './activity.css'

class Activity extends Component{
	componentWillMount(){
	}
	/*图片格式化*/
	_formatImg(src){
		let png=/png/g.test(src);
		src=`${src}${png?'.png':'.jpeg'}`
		let imgValue=src.split('');
		imgValue.splice(3,0,'/');
		imgValue.splice(1,0,'/');
		return imgValue.join('');
	}
	render(){
		let listDOM=this.props.data.map((value,index)=>{
			let img=this._formatImg(value.img);
			return(
				<a href="/" className='activity_body_a' key={index}>
					<img src={`https://fuss10.elemecdn.com/${img}?imageMogr/format/webp/`} alt={value.name}/>
					<div>
						<p className='food_name'>{value.name}</p>
						<div className='food_price'>
							<span className='price'>
								<span className='yuan'></span>
								{value.price}
							</span>
							<del>¥{value.original_price}</del>
						</div>
					</div>
					<span className="discount">{value.tip?value.tip:''}</span>
				</a>
			)
		})
		return(
			<section>
				<div className='activity_title'>
					<span className='line_left'></span>
					<svg className='activity_icon' xmlns="http://www.w3.org/2000/svg" viewBox="-2 3 37 35" version="1.1" fill="#ff7e30"><g><path d="M12.6 33.4c-.3 0-.5-.1-.7-.3L-.7 20.4c-.4-.4-.4-1 0-1.4L18.8-.7c.2-.2.5-.3.7-.3h12.9c.6 0 1 .4 1 1v12.3c0 .3-.1.5-.3.7L13.3 33c-.1.2-.4.3-.7.4zM1.4 19.7l11.2 11.2 18.8-19V1H20L1.4 19.7z" transform="translate(0 4)"/><path d="M24.8 10.9c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7 3.7 1.7 3.7 3.7-1.7 3.7-3.7 3.7zm0-5.5c-1 0-1.7.8-1.7 1.7 0 1 .8 1.7 1.7 1.7 1 0 1.7-.8 1.7-1.7 0-.9-.8-1.7-1.7-1.7zM6.9 21.9c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l9.7-9.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-9.7 9.7c-.2.2-.5.3-.7.3zM10.3 25.3c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l6.5-6.5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11 25c-.2.2-.5.3-.7.3z"  transform="translate(0 4)"/></g></svg>
					 {this.props.title}
					<span className='line_right'></span>
					<p className="activity_sub_title">{this.props.sub}</p>
				</div>
				<div className="activity_body">
					{listDOM}
				</div>
				<p className="activity-more">查看更多<svg className='svg-next' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 25" version="1.1"><path fill="none" fillRule="evenodd" stroke="#CCC" strokeLinecap="round" strokeWidth="3" d="M2.127 2l10.87 10.582L2.291 23.11"/></svg></p>
			</section>
		)
	}
}
export default Activity;