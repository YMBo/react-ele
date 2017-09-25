import React, { Component } from 'react';
import Find from './find/find.js'
import Order from './order/order.js'
import My from './my/my.js'
import Login from '../components/login/login.js'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Footer from '../components/footer/footer.js'
import MessageSmart from './message/message.js'
import Index from './index/index.js'

class App extends Component{
	render(){
		return(
			<BrowserRouter>
				<div>
					<Route exact path='/'  component={Index}/>
					<Route  path='/find' component={Find}/>
					<Route  path='/order' component={Order}/>
					<Route  path='/my' component={My}/>
					<Switch>
						<Route  path='/login' component={Login}/>
						<Route  path='/message' component={MessageSmart}/>
						<Footer/>
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App