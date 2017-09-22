import React,{Component} from 'react'
import './getAddress.css'
import Header from '../header/header.js'


class GetAddress extends Component{
	render(){
		return(
			<div className='getAddress'>
				<Header but={'login'} title={'地址'}/>
			</div>
		)
	}
}

export default GetAddress;