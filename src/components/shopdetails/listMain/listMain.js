import React,{Component} from 'react'
import Tabs from '../tabs/tabs_con.js'

class ListMain extends Component{
	callback(key){
		console.log('onChange', key);
	}
	handleTabClick(key){
		console.log('onTabClick', key);
	}
	render(){
		return(
			<div>
				<Tabs/>
			</div>
		)
	}
}
export default ListMain;