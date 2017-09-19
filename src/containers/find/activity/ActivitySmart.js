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
		let dayLogo=<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 3 37 35" version="1.1" fill="#ff7e30"><g><path d="M12.6 33.4c-.3 0-.5-.1-.7-.3L-.7 20.4c-.4-.4-.4-1 0-1.4L18.8-.7c.2-.2.5-.3.7-.3h12.9c.6 0 1 .4 1 1v12.3c0 .3-.1.5-.3.7L13.3 33c-.1.2-.4.3-.7.4zM1.4 19.7l11.2 11.2 18.8-19V1H20L1.4 19.7z" transform="translate(0 4)"/><path d="M24.8 10.9c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7 3.7 1.7 3.7 3.7-1.7 3.7-3.7 3.7zm0-5.5c-1 0-1.7.8-1.7 1.7 0 1 .8 1.7 1.7 1.7 1 0 1.7-.8 1.7-1.7 0-.9-.8-1.7-1.7-1.7zM6.9 21.9c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l9.7-9.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-9.7 9.7c-.2.2-.5.3-.7.3zM10.3 25.3c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l6.5-6.5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11 25c-.2.2-.5.3-.7.3z"  transform="translate(0 4)"/></g></svg>,
		foodsLogo=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 33" version="1.1"><g fill="#F12C2C" fillRule="evenodd"><path d="M19.1 10s.404-1.959.685-3.294l.068-.323a472.237 472.237 0 0 1 .83-3.832l.077-.352C21.016 1.036 20.194 0 19.01 0H14.49c-.625 0-1.284.377-1.606.915l-5.742 9.57L8 10H2.003A1.995 1.995 0 0 0 0 11.999V31C0 32.106.9 33 2.003 33h23c1.548 0 3.082-1.157 3.507-2.645l4.63-16.204C33.776 11.923 32.32 10 30 10H19.1zM18 12h12c.993 0 1.488.653 1.217 1.601l-4.63 16.205c-.18.629-.929 1.194-1.584 1.194h-23L2 11.999C2 11.996 8 12 8 12h.566l.291-.486 5.743-9.57c-.037.061-.028.056-.109.056h4.518c-.1 0-.22-.152-.202-.233l-.078.354a513.863 513.863 0 0 0-.832 3.848l-.069.325c-.284 1.349-.51 2.46-.657 3.255-.087.465-.146.818-.177 1.058a2.394 2.394 0 0 0-.026.41c.004.078.004.078.027.21.039.185.039.185.349.563.717.292.656.21.656.21z"/><path d="M7 10h2v22H7z"/></g></svg>,
		giftLogo=<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 3 30 30" version="1.1" fill="#ff7e30"><g><g transform="translate(-31 -1587)"><g  transform="translate(-2 1556)"><g><path d="M10 29.9c-7.2 0-13-5.8-13-13 0-2 .4-3.9 1.3-5.7C.5 6.7 5 3.9 10 3.9c7.2 0 13 5.8 13 13s-5.8 13-13 13zM.1 12.1C-.7 13.6-1 15.2-1 16.9c0 6.1 4.9 11 11 11s11-4.9 11-11-4.9-11-11-11c-4.3 0-8.1 2.3-9.9 6.2z"   transform="translate(34 32)"/><path d="M-1 12.1c-1.8-.9-3-2.7-3-4.8C-4 4.4-1.6 2 1.3 2c2 0 3.8 1.1 4.7 2.8l-1.8 1C3.7 4.7 2.5 4 1.3 4-.5 4-2 5.5-2 7.3c0 1.3.7 2.4 1.8 3l-.8 1.8zM21 11.8l-1-1.7c1-.6 1.6-1.7 1.6-2.8 0-1.8-1.5-3.3-3.3-3.3-1.3 0-2.5.8-3.1 2l-1.8-.8c.8-2 2.8-3.3 4.9-3.3 2.9 0 5.3 2.4 5.3 5.3-.1 2-1 3.7-2.6 4.6zM14.3 20.2h-4.2c-.6 0-1-.4-1-1v-8.1c0-.6.4-1 1-1s1 .4 1 1v7.1h3.2c.6 0 1 .4 1 1s-.4 1-1 1zM-1.2 32c-.2 0-.5-.1-.7-.3-.4-.4-.4-1-.1-1.4l4-4.5c.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4l-4 4.5c-.2.3-.4.4-.7.4zM21.5 32c-.3 0-.5-.1-.7-.3l-4-4.5c-.4-.4-.3-1 .1-1.4.4-.4 1-.3 1.4.1l4 4.5c.4.4.3 1-.1 1.4-.2.1-.4.2-.7.2z"  transform="translate(34 32)"/></g></g></g></g></svg>;
		return(
			<div>
				<EntrySmart/>
				<Activity logo={foodsLogo} title={'美食热推'} sub={'你的口味，我都懂得'} data={this.state.foodsData}/>
				<Activity logo={dayLogo} title={'天天特价'} sub={'特价商品，一网打尽'} data={this.state.data}/>
				<Activity logo={giftLogo} title={'限时好礼'} sub={'小积分换豪礼'} data={this.state.giftData}/>
			</div>
		)
	}
}
export default ActivitySmart;