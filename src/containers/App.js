import React, { Component } from 'react';
import Find from '../components/find/find.js'
import {BrowserRouter,Route} from 'react-router-dom'

import Footer from '../components/footer/footer.js'
import Index from './index/index.js'

class App extends Component{
	render(){
		return(
			<BrowserRouter>
				<div>
					<Route exact path='/'  component={Index}/>
					<Route exact path='/find' component={Find}/>
					<Footer/>
				</div>
			</BrowserRouter>
		)
	}
}

export default App