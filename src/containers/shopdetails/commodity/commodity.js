import React,{Component} from 'react'
import { connect } from 'react-redux'
import {addSelectedGoods,deleteSelectedGoods,initSelectedGoods} from '../../../reducers/dataState.js'
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
			<Commodity 
			basicData={this.props.basicData} 
			data={this.state.data} 
			contextData={this.props.contextData}
			deleteSelected={this.props.deleteSelected} 
			addSelected={this.props.addSelected}
			initSelected={this.props.initSelected}
			/>
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
		},
		initSelected:(shopData)=>{
			dispatch(initSelectedGoods(shopData))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommoditySmart);