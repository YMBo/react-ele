import React,{Component} from 'react'
import './active.css'

class Active extends Component{
	constructor(){
		super()
		this.handleShowMore=this.handleShowMore.bind(this)
		this.state={
			hide:true,
			is_active:false,
			num:0
		}
	}
	componentWillMount(){
		if(this.props.data){
			let num=this.props.data.length;
			this.setState({
				is_active:true,
				num
			})
		}
	}
	handleShowMore(event){
		this.setState({
			hide:!this.state.hide
		})
	}
	render(){
		let activitiesDOM=this.props.data.map((value,index)=>
			<div className='active_item' key={index} style={index>1?this.state.hide?{display:'none'}:{}:null}>
				<i className='active_logo' style={{color:'rgb(255, 255, 255)',backgroundColor:`#${value.icon_color}`}}>{value.icon_name}</i>
				<span>{value.description}</span>
			</div>);
		return(
			<div>
				<div className='active_itemAll'>
					{activitiesDOM}
				</div>
				<div className={`show_more ${this.state.hide?'':'on'}`} onClick={this.handleShowMore}>
					<span>{this.state.num}个活动</span>
				</div>
			</div>
		)
	}
}

export default Active;