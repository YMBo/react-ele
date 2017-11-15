import React,{Component} from 'react'
class EvaluateTab extends Component{
	handleClick(){
		this.props.handleClickTags(this.props.index,this.props.value.name)
	}
	render(){
		return(
			<li onClick={this.handleClick.bind(this)} className={`${this.props.currentIndex===this.props.index?'rating-tags-on':''}${this.props.value.unsatisfied?' rating-tags-no':''}`}>{this.props.value.name}({this.props.value.count})</li>
		)
	}
}

export default EvaluateTab;