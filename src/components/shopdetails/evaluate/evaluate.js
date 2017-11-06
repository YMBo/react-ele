import React,{Component} from 'react'

class Evaluate extends Component{
	render(){
		let dom=this.props.evaluateData.map((value,index)=>{
			return value.rated_at
		})
		return (
			<div>{dom}</div>
		)
	}
}

export default Evaluate;
