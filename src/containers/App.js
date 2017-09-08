import React, { Component } from 'react';
import Headersmart from './header.js'
import Search from '../components/search/search.js'
import Hotsmart from './hot.js'
import Bannersmart from './banner.js'

class App extends Component{
	render(){
		return(
			<div className='wrapper'>
				<Headersmart/>
				<Search/>
				<Hotsmart/>
				<Bannersmart/>
			</div>
		)
	}
}

export default App