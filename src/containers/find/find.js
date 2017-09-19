import React,{Component} from 'react';
import Header from '../../components/header/header.js'
import ActivitySmart from './activity/ActivitySmart.js'

class Find extends Component{
	render(){
		return(
			<div>
				<Header/>
				<ActivitySmart/>
			</div>
		)
	}
}

export default Find;