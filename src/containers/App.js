import React, { Component } from 'react';
import Headersmart from './header.js'
import Search from '../components/search/search.js'
import Hot from './hot.js'

class App extends Component{
	render(){
		return(
			<div className='wrapper'>
				<Headersmart/>
				<Search/>
				<Hot/>
			</div>
		)
	}
}

export default App