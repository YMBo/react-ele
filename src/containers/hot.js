import React,{Component} from 'react'
import { hot_data } from '../data/data.js'
import {shuffle} from '../data/shuffle.js'
import Hot from '../components/hot/hot.js'

class Hotsmart extends Component{
	constructor(){
		super();
		this.state={
			hot_data:[]
		}
	}
	/*父组件的componentDidMount并不能触发子组件的渲染,所以父组件给子组件传数据要componentWillMount传过来*/
	componentWillMount(){
		if(hot_data){
			this.setState({
				hot_data:shuffle(hot_data)
			})
		}
	}
	render(){
		return(
			<Hot hot_data={this.state.hot_data}/>
		)
	}
}

export default Hotsmart;