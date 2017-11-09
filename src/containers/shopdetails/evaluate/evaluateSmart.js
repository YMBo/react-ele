import React,{Component} from 'react'
import Evaluate from '../../../components/shopdetails/evaluate/evaluate.js'
import 'es6-promise'
import 'whatwg-fetch'

/*评价页*/
class EvaluateSmart extends Component{
	constructor(){
		super();
		this.state={
			evaluateData:[],
			tags:[]
		}
	}
	componentDidMount(){
		fetch(`/api/ugc/v2/restaurants/${this.props.id}/ratings?has_content=true&offset=0&limit=10`)
		.then(response=>{return response.json()})
		.then(dataJson=>{
			this.setState({
				evaluateData:dataJson
			})
		});
		/*tags*/
		fetch(`/api/ugc/v2/restaurants/${this.props.id}/ratings/tags`)
		.then(response=>{return response.json()})
		.then(dataJson=>{
			this.setState({
				tags:dataJson
			})
		});
	}
	render(){
		return(
			<Evaluate tags={this.state.tags} evaluateData={this.state.evaluateData}/>
		)
	}
}
export default EvaluateSmart;