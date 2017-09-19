import React,{Component} from 'react';
import Activity from '../../../components/find/activity/activity.js';
import EntrySmart from '../entry/EntrySmart.js'
import {goodPriceData,GoodFoods,gift} from '../../../data/data.js';
/*天天特价*/
/*格式要求*/
/*name:'',
img:'',
//现在价格
price:0,
//打折价格
original_price:0,
//左上tip
tip:0
*/
class ActivitySmart extends Component{
	constructor(){
		super()
		this.state={
			data:[],
			foodsData:[],
			giftData:[]
		}
	}
	componentDidMount(){
		/*天天特价*/
		let data=goodPriceData.query_list.slice(0,3).map((value,index)=>value.foods[0]);
		let everyData=data.map((value,index)=>({
			name:value.restaurant_name,
			img:value.image_path,
			price:'¥'+value.price,
			original_price:value.original_price,
			tip:(value.discount_rate*10).toFixed(1)+'折'
		}))
		/*美食推荐*/
		let foodsData=GoodFoods[0].foods;
		let foodsEveryData=foodsData.map((value,index)=>({
			name:value.name,
			img:value.image_hash,
			price:'¥'+value.price,
			original_price:value.original_price,
			tip:null
		}))
		/*限时好礼*/
		let giftData=gift.map((value,index)=>({
			name:value.title,
			img:value.image_hash,
			price:value.points_required+'积分',
			original_price:value.original_price,
			tip:value.corner_marker,
		}))
		this.setState({
			data:everyData,
			foodsData:foodsEveryData,
			giftData
		})
	}
	render(){
		return(
			<div>
				<EntrySmart/>
				<Activity title={'美食热推'} tj={'折'} sub={'你的口味，我都懂得'} data={this.state.foodsData}/>
				<Activity title={'天天特价'} tj={'折'} sub={'特价商品，一网打尽'} data={this.state.data}/>
				<Activity title={'限时好礼'} tj={'折'} sub={'小积分换豪礼'} data={this.state.giftData}/>
			</div>
		)
	}
}
export default ActivitySmart;