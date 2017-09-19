import React,{Component} from 'react'
import Header from '../../components/header/header.js'
import MyunLogin from '../../components/my/myunLogin/myunLogin.js'

class My extends Component{
	render(){
		return(
			<div>
				<Header title={'我的'}/>
				<MyunLogin/>
			</div>
		)
	}
}

export default My;