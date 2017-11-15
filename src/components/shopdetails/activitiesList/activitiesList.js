import React,{Component} from 'react'
import './activitiesList.css'

class ActivitiesList extends Component{
	render(){
		return(
			<div className='activityPage_main_list_div'>
				<span className="activity-logo" style={{color:'rgb(255, 255, 255)',backgroundColor:`#${this.props.value.icon_color}`}}>{this.props.value.icon_name}</span>
				<span className="activity-des">{this.props.value.description}</span>
			</div>
		)
	}
}
export default ActivitiesList;