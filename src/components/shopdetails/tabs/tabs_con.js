import React,{Component} from 'react'
import Tabs_li from './tabs.js'
class Tabs extends Component{
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
						<div key={0}>1</div>
						<div key={1}>2</div>
						<div key={2}>3</div>
				</Tabs_li>
			</div>
		)
	}
}
export default Tabs;