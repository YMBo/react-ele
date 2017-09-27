import React,{Component} from 'react'
import './listHeader.css'

class ListHeader extends Component{
	constructor(){
		super()
		this.state={
			curName:'',
			curColor:'',
			description:''
		}
	}
	render(){
		let cutName,cutColor,description='';
		if(this.props.data.cut){
			cutName=this.props.data.cut.icon_name;
			cutColor=this.props.data.cut.icon_color;
			description=this.props.data.cut.description;
		}
		return(
			<div className='shoplist_header'>
				<div className='shoplist_header_bg' style={{backgroundImage:`url('//fuss10.elemecdn.com/${this.props.data.image_path?this.props.data.image_path:''}?imageMogr/format/webp/thumbnail/!40p/blur/50x40/')`}}>
				</div>
				<nav>
					<a href="javascript:history.back()" className='back'>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 32" version="1.1"><path fill="#fff" d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"/></svg>
					</a>
				</nav>
				<div className="shoplist_header_main">
					<img src={`//fuss10.elemecdn.com/${this.props.data.image_path?this.props.data.image_path:''}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`} alt=""/>
					<div className="shoplist_header_content">
						<h2 className='shoplist_header_name'>{this.props.data.name}</h2>
						<p className='shop_header_delivery'>
							<span  className='shop_header_deliveryItem'>
								{this.props.data.kd}
							</span>
							<span className='shop_header_deliveryItem'>
								{this.props.data.order_lead_time}分钟送达
							</span>
							<span className='shop_header_deliveryItem'>
								{this.props.data.piecewise_agent_fee}
							</span>
						</p>
						<div className='shop_header_notice'>
							<span>公告：</span>
							<span>
								{this.props.data.promotion_info}
							</span>
						</div>
					</div>
				</div>
				{/*满减*/}
				<div className="activity_cut_box">
					<div className='activity_cut'>
						<i className='activity_cut_icon' style={{backgroundColor:`#${cutColor}`}}>
							<span>{cutName}</span>
						</i>
						<span className='activity_cut_main'>{description}</span>
					</div>
					<div className='activity_cut_more'>
						{this.props.data.activitiesNum}个活动
					</div>
				</div>

			</div>
		)
	}
}
export default ListHeader;