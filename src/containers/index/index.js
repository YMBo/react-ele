import React, { Component } from 'react';
import Headersmart from './header.js'
import Search from '../../components/index/search/search.js'
import Hotsmart from './hot.js'
import Bannersmart from './banner.js'
import H3title from '../../components/index/title/h3title.js'
import ListItem from './listItem'
import ReturnTop from '../../components/index/returnTop/returnTop.js'
import Footer from '../../components/index/footer/footer.js'

class Index extends Component{
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
				<Footer/>
			</div>
		)
	}
}

export default Index