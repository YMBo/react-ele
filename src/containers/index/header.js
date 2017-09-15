import React,{Component} from 'react'
import Header from '../../components/index/header/header.js'
import { weather,address } from '../../data/data.js'

class Headersmart extends Component{
	constructor(){
		super()
		this.state={
			temperature:'',
			description:'',
			image_hash:'',
			address:''
		}
	}
	componentWillMount(){
		this.setState({
			temperature:weather.temperature,
			description:weather.description,
			image_hash:weather.image_hash,
			address:address.address
		})
	}
	render(){
		return(
			<Header data={ this.state } />
		)
	}
}

export default Headersmart;