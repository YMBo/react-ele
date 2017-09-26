import React,{Component} from 'react'

class ShopDetails extends Component{
	render(){
		return <div>{this.props.id}              {this.props.address}</div>
	}
}

export default ShopDetails;