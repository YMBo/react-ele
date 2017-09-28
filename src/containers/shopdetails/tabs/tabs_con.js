import React,{Component} from 'react'
import Tabs_li from '../../../components/shopdetails/tabs/tabs.js'
import CommoditySmart from '../commodity/commodity.js'
class TabsSmart extends Component{
	constructor(){
		super()
		this.state={
			current:false
		}
	}
	handClick(){
		this.setState({
			current:true
		})
	}
	render(){
		const data=[
			{
				title:'商品',
				num:0
			},
			{
				title:'评价',
				num:2
			},
			{
				title:'店铺',
				num:3
			}
		]
		return(
			<div>
				<Tabs_li data={data}>
						<CommoditySmart key={0}/>
						<div key={1}>2</div>
						<div key={2}>3</div>
				</Tabs_li>
			</div>
		)
	}
}
export default TabsSmart;