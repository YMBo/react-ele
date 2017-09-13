import React, { Component } from 'react';
import Headersmart from './header.js'
import Search from '../components/search/search.js'
import Hotsmart from './hot.js'
import Bannersmart from './banner.js'
import H3title from '../components/title/h3title.js'
import ListItem from './listItem'
import ReturnTop from '../components/returnTop/returnTop.js'

class App extends Component{
	render(){
		return(
			<div className='wrapper'>
				<Headersmart/>
				<Search/>
				<Hotsmart/>
				<Bannersmart/>
				<H3title/>
				<ListItem/>
				<ReturnTop/>
			</div>
		)
	}
}

export default App