import React,{Component} from 'react'
import './header.css'
import GetAddress from '../../getAddress/getAddress.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
		window.history.pushState({page:'home'},'',' ');
		this._isCurrent=this._isCurrent.bind(this);
		window.addEventListener('popstate',this._isCurrent)
	}
	handleClick(){
		this.setState({
			getAddress:true
		});
		this._addHistory()
		this._bodyoverflow()
	}
	/*历史判断*/
	_isCurrent(){
		if(!window.history.state){return;}
		if(window.history.state.page==='getAddresss'){
			this.setState({
				getAddress:true
			});
			this._bodyoverflow()
			console.log('yo')
		}else if(window.history.state.page==='home'){
		    	this.setState({
		    		getAddress:false
		    	});
		    	window.document.body.style.overflow='auto';
		}	
	}
	_bodyoverflow(){
		window.document.body.style.overflow='hidden';
		window.document.body.style.height='100vh';
	}
	/*添加历史记录*/
	_addHistory(){
		window.history.pushState({page:'getAddresss'},'',' ');
		this._addHistory._isCurrent=true;
	}
	componentWillUnmount(){
		window.removeEventListener('popstate',this._isCurrent)
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

