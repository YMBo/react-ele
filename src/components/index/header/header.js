import React,{Component} from 'react'
import './header.css'
import GetAddress from '../../getAddress/getAddress.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

let falg=true
class Header extends Component{
	constructor(){
		super();
		this.state={
			temperature:'',
			description:'',
			image_hash:'',
			address:'',
			getAddress:false
		}
	}
	componentWillMount(){
		/*如果地理位置和天气存在*/
		if(this.props.data){
			let data=this.props.data;
			this.setState(data)
		}
		window.addEventListener("popstate", (event)=>{
		event.preventDefault()
		    var currentState = window.history.state;
		    console.log(currentState)
		    if(currentState==='address'){
		    	console.log('666')
		    	this.setState({
		    		getAddress:false
		    	});
		    }									
		});
	}
	handleClick(){
		this.setState({
			getAddress:true
		});
		/*if(falg){
			window.history.pushState('address','','');
			falg=false
		}*/
	}

	render(){
		return(
			<ReactCSSTransitionGroup 
			transitionName='example'
			transitionEnterTimeout={500}
			transitionLeaveTimeout={500}>
				<header className='index_header'>
					<div className='header_title'>
						<div className="index-address" onClick={this.handleClick.bind(this)}>
							<span className='address_icon'></span>
							<span className="index-word">{this.state.address}</span>
							<i className='sj'></i>
						</div>
						<aside className='weather'>
							<div>
								<h2 className='weather_num'>{this.state.temperature}</h2>
								<p className='weather_today'>{this.state.description}</p>
							</div>
							<img alt="天气图标" className="weather-icon" src="//fuss10.elemecdn.com/9/b9/c8e482821be2080edcffbb3a8d376png.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/"/>
						</aside>
					</div>
				</header>
				{this.state.getAddress?<GetAddress/>:null}
			</ReactCSSTransitionGroup>
		)
	}
}
export default Header;

