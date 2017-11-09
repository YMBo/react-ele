import React,{Component} from 'react'
import Star from './star.js'
import './activityPage.css'

class ActivityPage extends Component{
	handleActivity(){
		this.props.handleActivity()
	}
	render(){
		let activitiesDOM=this.props.allactivities.map((value,index)=>
			<li className='activityPage_main_list' key={index} >
				<div className='activityPage_main_list_div'>
					<span className="activity-logo" style={{color:'rgb(255, 255, 255)',backgroundColor:`#${value.icon_color}`}}>{value.icon_name}</span>
					<span className="activity-des">{value.description}</span>
				</div>
			</li>);
		return (
			<div ref={(cover)=>this.cover=cover} className='activityPage_cover'>
				<div className='activityPage_cover_box'>
					<div className='activityPage_main'>
						<h2>永和大王（东单北大街店BJ063）</h2>
						<h2>
							<div className='activityPage_main_star'>
								<Star rating={this.props.rating}/>
							</div>
						</h2>
						<h3 className="activityPage_main_title">
							<span>优惠信息</span>
						</h3>
						<ul>
							{activitiesDOM}
						</ul>
						<h3 className="activityPage_main_title">
							<span>商家公告</span>
						</h3>
						<div>{this.props.promotion_info}</div>
					</div>
					<div className='activityPage_close' onClick={this.handleActivity.bind(this)}>
						<svg width='100%' height='100%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path fillRule="evenodd" d="M480.518 512L8.377 984.141c-8.853 8.853-8.777 22.871-.083 31.565 8.754 8.754 22.825 8.656 31.565-.083L512 543.482l472.141 472.141c8.853 8.853 22.871 8.777 31.565.083 8.754-8.754 8.656-22.825-.083-31.565L543.482 512l472.141-472.141c8.853-8.853 8.777-22.871.083-31.565-8.754-8.754-22.825-8.656-31.565.083L512 480.518 39.859 8.377C31.006-.476 16.988-.4 8.294 8.294c-8.754 8.754-8.656 22.825.083 31.565L480.518 512z"/></svg>
					</div>
				</div>
			</div>
		)
	}
}

export default ActivityPage;