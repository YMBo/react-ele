import React,{Component} from 'react'
import { connect } from 'react-redux'
import {addSelectedGoods,deleteSelectedGoods} from '../../../reducers/dataState.js'
import Commodity from '../../../components/shopdetails/commodity/commodity.js'
import 'es6-promise'
import 'whatwg-fetch'

/*商品页*/
class CommoditySmart extends Component{
	constructor(){
		super();
		this.state={
			data:null
		}
	}
	componentWillMount(){
		fetch(`/api/shopping/v2/menu?restaurant_id=${this.props.id}`)
		.then(response=>{return response.json()})
		.then(dataJson=>{
			this.setState({
				data:dataJson
			})
		})
	}
	render(){
		return(
			<Commodity basicData={this.props.data} data={this.state.data} deleteSelected={this.props.deleteSelected} addSelected={this.props.addSelected}/>
		)
	}
}

const mapStateToProps=(state)=>{
	return{
		contextData:state.allSelected
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		addSelected:(shopData)=>{
			dispatch(addSelectedGoods(shopData))
		},
		deleteSelected:(shopData)=>{
			dispatch(deleteSelectedGoods(shopData))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommoditySmart);