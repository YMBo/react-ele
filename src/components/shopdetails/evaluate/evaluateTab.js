import React,{Component} from 'react'

			/* rating-tags-on*/
class EvaluateTab extends Component{
	constructor(){
		super()
		this.state={
			current:0
		}
	}
	handleClick(){
		this.props.handleClickTags(this.props.index)
	}
	render(){
		return(
			<li onClick={this.handleClick.bind(this)} className={`${this.props.current===this.props.index?'rating-tags-on':''}${this.props.value.unsatisfied?' rating-tags-no':''}`}>{this.props.value.name}({this.props.value.count})</li>
		)
	}
}

export default EvaluateTab;