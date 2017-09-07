import React, { Component } from 'react';
import {hot_search} from '../data/hot_search.js'
import {shuffle} from '../data/shuffle.js'
import Header from '../components/header/header.js'

class App extends Component{
	render(){
		return(
			<div className='wrapper'>
				<Header/>
			</div>
		)
	}
}

export default App