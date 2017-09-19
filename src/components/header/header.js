import React,{Component} from 'react';
import './header.css'

class Header extends Component{
	handleBack(){
		if(document.referrer.length!==0){
			window.history.back()
		}else{
			window.location.href='/'
		}
	}
	render(){
		return(
			<header className='use_header'>
				<div className='use_header_bg'>
					<div className='back' onClick={this.handleBack}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 32" version="1.1"><path fill="#fff" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"/></svg>
					</div>
					<h1 className='use_header_title'>{this.props.title}</h1>
				</div>
			</header>
		)
	}
}

export default Header;