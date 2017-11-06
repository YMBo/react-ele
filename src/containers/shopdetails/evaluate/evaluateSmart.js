import React,{Component} from 'react'
import Evaluate from '../../../components/shopdetails/evaluate/evaluate.js'
import 'es6-promise'
import 'whatwg-fetch'

/*评价页*/
class EvaluateSmart extends Component{
	constructor(){
		super();
		this.state={
			evaluateData:[]
		}
	}
	componentDidMount(){
		fetch(`/api/ugc/v2/restaurants/${this.props.id}/ratings?has_content=true&offset=0&limit=10`)
		.then(response=>{return response.json()})
		.then(dataJson=>{
			this.setState({
				evaluateData:dataJson
			})
		})
	}
	render(){
		return(
			<Evaluate evaluateData={this.state.evaluateData}/>
		)
	}
}
export default EvaluateSmart;