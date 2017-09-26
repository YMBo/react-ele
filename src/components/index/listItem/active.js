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
		event.stopPropagation();
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
				<div className={`show_more ${this.state.hide?'':'on'} ${this.state.num<=2?'':'active_num'}`} onClick={this.handleShowMore}>
					<div className='show_num'>
						<span>{this.state.num}个活动</span>
						<svg className={`${this.state.hide?'':'nowSvg'}`} viewBox="0 0 12 6" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.577 5.423c.79.77 2.073.767 2.857 0l4.12-4.026C12.345.625 12.09 0 10.985 0H1.027C-.077 0-.33.63.457 1.397l4.12 4.026z"></path></svg>
					</div>
				</div>
			</div>
		)
	}
}

export default Active;