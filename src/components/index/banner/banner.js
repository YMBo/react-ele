import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactSwipe from 'react-swipe';
import {splitArr} from '../../../data/shuffle.js'
import './banner.css';

class Banner extends Component{
	static propTypes = {
		data: PropTypes.array
	}
	constructor(){
		super();
		this.state={
			actualSum:0,
			sum:0,
			currentPage:0
		}
	}
	componentWillMount(){
		/*先分成几个数组,也就是几个div盒子*/
		let bannerDiv=splitArr(this.props.data,8);
		/*正常页数*/
		let sum=bannerDiv.length;
		this.setState({
			sum:sum
		})
	}
	componentDidMount(){
		/*因为这个插件有无限循环多复制了一次div，所以要进行判断*/
		/*实际的页数*/
		this.setState({
			actualSum:document.querySelectorAll('.banner_list').length
		})
	}
	render(){
		/*先分成几个数组,也就是几个div盒子*/
		let bannerDiv=splitArr(this.props.data,8);
		/*控制器dd*/
		let dd=[];
		/*完整列表*/
		let bannerList=bannerDiv.map((value,index)=>{
			dd.push(<li className={`contrdd ${this.state.currentPage===index?'is-active':''}`} data-index={this.state.current>0?'11':'222'} ref={(li)=>{this.li=li}}  key={index}>{this.state.current}</li>);
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
		/*this指向*/
		let call=(index, elem)=>{
			/*如果大于正常页数，就进行切割*/
			this.setState({
				currentPage:this.state.sum<this.state.actualSum?(index)%2:index
			})
		}
		let opt={
			callback(index, elem){
				call(index, elem)
			}
		}
		return (
			<div className='banner'>
				<ReactSwipe className="carousel" ref={(reactSwipe)=>{this.reactSwipe=reactSwipe}} swipeOptions={opt}>
					{bannerList}
				</ReactSwipe>
				<ul className='baner_dd'>
					{dd}
				</ul>
			</div>
		)
	}
}

export default Banner;