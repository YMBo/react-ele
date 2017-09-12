import React,{Component} from 'react'
import { body } from '../data/data.js'
import ListItem from '../components/listItem/listItem.js'

class ListItemsmart extends Component{
	constructor(){
		super()
		this.state={
			listData:null
		}
	}
	componentWillMount(){
		this.setState({
			listData:body
		})
	}
	render(){
		return (
			<div>
				{this.state.listData.map((value,index)=>{return <ListItem data={value} key={index}/>})}
			</div>
		)
	}	
}

export default ListItemsmart;