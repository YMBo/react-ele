import React,{Component} from 'react'
import './getAddress.css'
import Header from '../header/header.js'
import spng from './search_address.png'


class GetAddress extends Component{
	constructor(){
		super()
		this.state={
			rotate:false
		}
	}
	handleClick(){
		if(this.handleClick.timer){clearTimeout(this.handleClick.timer)}
		this.setState({rotate:true})
		this.handleClick.timer=setTimeout(()=>{
			this.setState({
				rotate:false
			})
		},1000)
	}
	render(){
		return(
			<div className='getAddress'>
				<Header but={'login'} title={'选择收货地址'}/>
				<form className="search_address_form">
					<img src={spng} alt='搜索'/> 
					<input type="search" placeholder="请输入地址" autoFocus="autofocus" className="search_address_form_input"/>
				</form>
				<section className='search_address'>
					<h4>当前地址</h4>
					<div className="address_current">
						<span className='current_address'>地球</span>
						<span className="pos_address" onClick={this.handleClick.bind(this)}>
							<svg className={this.state.rotate?'rotate':'cc'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" version="1.1"><g fillRule="evenodd" fill="none"><circle cx="7.5" cy="7.5" r="7" stroke="#2395FF"/><path fill="#2395FF" d="M7 0h1v5H7zM7 10h1v5H7zM10 7h5v1h-5zM0 7h5v1H0z"/></g></svg>
							<span>重新定位</span>
						</span>
					</div>
				</section>
			</div>
		)
	}
}

export default GetAddress;