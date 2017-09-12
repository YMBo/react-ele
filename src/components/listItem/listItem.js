import React,{Component} from 'react'
import Active from './active.js'
import './listItem.css'

class ListItem extends Component{
	constructor(){
		super()
		this.state={
			name:'',
			img:'',
			/*快递*/
			is_solid:false,
			text:"",
			/*配送费*/
			float_delivery_fee:0,
			/*起送*/
			float_minimum_order_amount:0,
			/*评分*/
			rating:0,
			/*月售*/
			recent_order_num:0,
			/*配送时间*/
			order_lead_time:0,
			/*新店*/
			is_new:false,
			/*品牌*/
			is_premium:false,
			/*保*/
			supportsDOM:null,
			/*活动*/
			activities:[]
		}
	}
	componentWillMount(){
		console.log(this.props.data)
		/*蜂鸟*/
		if(this.props.data.delivery_mode){
			this.setState({
				is_solid:true,
				text:this.props.data.delivery_mode.text
			})
		}
		/*活动*/
		if(this.props.data.activities){
			this.setState({
				activities:this.props.data.activities
			})
		}
		/*保*/
		let supportsDOM=this.props.data.supports.map((value,index)=><li key={index}>{value.icon_name}</li>)
		/*图片*/
		let imgValue=this._formatImg();
		this.setState({
			name:this.props.data.name,
			img:imgValue,
			float_delivery_fee:this.props.data.float_delivery_fee,
			float_minimum_order_amount:this.props.data.float_minimum_order_amount,
			rating:this.props.data.rating,
			recent_order_num:this.props.data.recent_order_num,
			order_lead_time:this.props.data.order_lead_time,
			is_premium:this.props.data.is_premium,
			is_new:this.props.data.is_new,
			supportsDOM:supportsDOM
		})
	}
	/*图片格式化*/
	_formatImg(){
		let img=this.props.data.image_path
		let png=/png/g.test(img);
		img=`${img}${png?'.png':'.jpeg'}`
		let imgValue=img.split('');
		imgValue.splice(3,0,'/');
		imgValue.splice(1,0,'/');
		return imgValue.join('');
	}
	render(){
		return(
			<section className='shoplist'>
				<section className='shoplist_item'>
					<div className='shoplist_img'>
						<div className='shoplist_logo'>
							<img src={`//fuss10.elemecdn.com/${this.state.img}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`} alt="" />
						</div>
						{this.state.is_new?<div className="show_new_logo"><span>新店</span></div>:null}
					</div>
					<div className='shoplist_main'>
						<section className="show_line">
							<h3 className={this.state.is_premium?'is_premium  show_line_h3':'show_line_h3'}>
								<span>{this.state.name}</span>
							</h3>
							<ul className='show_supportWrap'>
								{this.state.supportsDOM}
							</ul>
						</section>
						<section className="show_line show_line2">
							<div className='show_rateWrap'>
								<div className='show_star'></div>
								<span className='show_num'>{this.state.rating}</span>
								<span className='show_num'>月售{this.state.recent_order_num}单</span>
							</div>
							{this.state.is_solid?<div className='show_kd'>
								<span>{this.state.text}</span>
							</div>:null}
							
						</section>
						<section className="show_line">
							<div className='show_money'>
								<span>¥{this.state.float_minimum_order_amount}起送</span>
								<span>配送费¥{this.state.float_delivery_fee}</span>
							</div>
							<div className='show_time'>
								<span>1.13km</span>
								<span>{this.state.order_lead_time}分钟</span>
							</div>
						</section>
						<div className='line'></div>
						<section className="show_active">
							<Active data={this.state.activities}/>
						</section>
					</div>
				</section>
			</section>
		)
	}
}

export default ListItem;