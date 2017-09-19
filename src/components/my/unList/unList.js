import React,{Component} from 'react'
import './unList.css'

class UnList extends Component{
	render(){
		return(
			<section className='unList'>
				<a href="/" className='unList_href'>
					<aside className='unList_icon'>
						{this.props.icon}
					</aside>
					<div className='unList_sub'>
						{this.props.title}
						<span className="unList_href_go"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1" fill="#bbb"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path></svg></span>
					</div>
				</a>
			</section>
		)
	}
}

export default UnList;