import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import {splitArr} from '../../data/shuffle.js'
import './banner.css';

class Banner extends Component{
	constructor(){
		super();
		this.state={
			list:[]
		}
	}
	componentWillMount(){
		if(this.props.data){
			/*先分成几个数组,也就是几个div盒子*/
			let bannerDiv=splitArr(this.props.data,8);
			/*完整列表*/
			let bannerList=bannerDiv.map((value,index)=>{
				return (
					<div className='banner_list' key={index}>
						{value.map((childValue,indexChild)=>{
							let imgValue=childValue.image_hash.split('');
							imgValue.splice(3,0,'/');
							imgValue.splice(1,0,'/');
							imgValue=imgValue.join('');
							return(
								<a href="/" key={indexChild}>
								<div className="container"><img alt={childValue.description} src={`//fuss10.elemecdn.com/${imgValue}.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/`}/></div>
								<span className='title'>{childValue.name}</span>
								</a>
							)
						})}
					</div>
				)
			})
			this.setState({
				list:bannerList
			})
		}
	}
	render(){
		let opt={
			callback(index, elem) {
				console.log(index)
			}
		}
		return (
			<div>
				<ReactSwipe className="carousel" ref={(reactSwipe)=>{this.reactSwipe=reactSwipe}} swipeOptions={opt}>
				{this.state.list}
				</ReactSwipe>
				<ul className='baner_dd'>
					<li></li>
					<li></li>
				</ul>
			</div>
		)
	}
}

export default Banner;