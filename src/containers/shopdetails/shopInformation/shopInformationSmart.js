import React,{Component} from 'react'
import ShopInformation from '../../../components/shopdetails/shopInformation/shopInformation.js'

class ShopInformationSmart extends Component{
	constructor(){
		super();
		this.state={
			data:{}
		}
	}
	componentDidMount(){
		fetch(`/api/shopping/restaurant/${this.props.id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification`)
		.then(response=>{return response.json()})
		.then(dataJson=>{
			this.setState({
				data:dataJson
			})
		});
	}
	render(){
		return(
			<ShopInformation dataJson={this.state.data}/>
		)
	}
}
export default ShopInformationSmart;