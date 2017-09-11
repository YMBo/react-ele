import React,{Component} from 'react'
import './active.css'

class Active extends Component{
	constructor(){
		super()
		this.handleShowMore=this.handleShowMore.bind(this)
		this.state={
			hide:true
		}
	}
	handleShowMore(event){
		this.setState({
			hide:!this.state.hide
		})
	}
	render(){
		return(
			<div>
				<div className='active_itemAll'>
					<div className='active_item'>
						<i className='active_logo' style={{background:'green',color:'#fff'}}>首</i>
						<span>新用户下单立减17.0元</span>
					</div>
					<div className='active_item'>
						<i className='active_logo' style={{background:'green',color:'#fff'}}>首</i>
						<span>新用户下单立减17.0元</span>
					</div>
					<div className='active_item' style={this.state.hide?{display:'none'}:{}}>
						<i className='active_logo' style={{background:'green',color:'#fff'}}>首</i>
						<span>新用户下单立减17.0元</span>
					</div>
					<div className='active_item' style={this.state.hide?{display:'none'}:{}}>
						<i className='active_logo' style={{background:'green',color:'#fff'}}>首</i>
						<span>新用户下单立减17.0元</span>
					</div>
					<div className='active_item' style={this.state.hide?{display:'none'}:{}}>
						<i className='active_logo' style={{background:'green',color:'#fff'}}>首</i>
						<span>新用户下单立减17.0元</span>
					</div>
				</div>
				<div className={`show_more ${this.state.hide?'':'on'}`} onClick={this.handleShowMore}>
					<span>6个活动</span>
				</div>
			</div>
		)
	}
}

export default Active;