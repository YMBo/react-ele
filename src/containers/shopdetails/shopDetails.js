import React,{Component} from 'react'
import ListHeader from '../../components/shopdetails/listHeader/listHeader.js'
import TabsSmart from './tabs/tabs_con.js'
import 'es6-promise'
import 'whatwg-fetch'

class ShopDetails extends Component{
	constructor(){
		super()
		this.state={
			headerData:{}
		}
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
	componentDidMount(){
		/*{this.props.id}              {this.props.address}*/
		/*公告*/
		fetch(`/api/shopping/restaurant/${this.props.id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification`)
		.then(response=>response.json())
		.then(dataJson=>{
		document.title=dataJson.name;
		console.log(dataJson.activities)
			this.setState({
				headerData:{
					id:dataJson.id,
					/*名称*/
					name:dataJson.name,
					/*配送费*/
					piecewise_agent_fee:dataJson.piecewise_agent_fee.description,
					/*起送价*/
					float_minimum_order_amount:dataJson.float_minimum_order_amount,
					/*公告*/
					promotion_info:dataJson.promotion_info.length===0?"欢迎光临，用餐高峰期请提前下单，谢谢。":dataJson.promotion_info,
					/*时间*/
					order_lead_time:dataJson.order_lead_time,
					/*快递*/
					kd:dataJson.delivery_mode?'蜂鸟配送':'商家配送',
					/*满减*/
					cut:dataJson.activities[1],
					/*活动数量*/
					activitiesNum:dataJson.activities.length,
					/*所有活动*/
					allactivities:dataJson.activities,
					/*头图*/
					image_path:this._formatImg(dataJson.image_path),
				}
			})
		})
	}
	render(){
		return (
			<div className='scrollBox'>
				<div className='scrollMain'>
					<ListHeader data={this.state.headerData}/>
					<TabsSmart id={this.props.id} data={this.state.headerData}/>
				</div>
			</div>
			)
	}
}

export default ShopDetails;