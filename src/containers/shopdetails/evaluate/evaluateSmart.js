import React,{Component} from 'react'
import Evaluate from '../../../components/shopdetails/evaluate/evaluate.js'
import 'es6-promise'
import 'whatwg-fetch'

/*评价页*/
class EvaluateSmart extends Component{
	constructor(){
		super();
		this.state={
			evaluateData:null
		}
	}
	
	render(){
		return(
			<Evaluate/>
		)
	}
}
export default EvaluateSmart;