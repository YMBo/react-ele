import React,{Component} from 'react'
import TabsLi from '../../../components/shopdetails/tabs/tabs.js'
import CommoditySmart from '../commodity/commodity.js'
class TabsSmart extends Component{
	constructor(){
		super()
		this.state={
			current:false,

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
			<TabsLi data={data}>
					<CommoditySmart id={this.props.id} key={0}/>
					<div key={1}>2</div>
					<div key={2}>3</div>
			</TabsLi>
		)
	}
}
export default TabsSmart;