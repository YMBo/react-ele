import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactSwipe from 'react-swipe';
import {splitArr} from '../../data/shuffle.js'
import './banner.css';

/*获取所有小按钮*/
let contDOM=null;
class Banner extends Component{
	static propTypes = {
		data: PropTypes.array
	}
	constructor(){
		super();
		this.state={
			list:[],
			dd:[],
			actualSum:0,
			sum:0
		}
	}
	componentWillMount(){
		if(this.props.data){
			/*先分成几个数组,也就是几个div盒子*/
			let bannerDiv=splitArr(this.props.data,8);
			/*控制器dd*/
			let dd=[];
			/*正常页数*/
			let sum=bannerDiv.length;
			/*完整列表*/
			let bannerList=bannerDiv.map((value,index)=>{
				dd.push(<li className={`contrdd ${index===0?'is-active':''}`} data-index={this.state.current>0?'11':'222'} ref={(li)=>{this.li=li}}  key={index}>{this.state.current}</li>);
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
				list:bannerList,
				dd:dd,
				sum:sum
			})
		}
	}
	componentDidMount(){
		/*因为这个插件有无限循环多复制了一次div，所以要进行判断*/
		/*实际的页数*/
		this.setState({
			actualSum:document.querySelectorAll('.banner_list').length
		})
		contDOM=document.querySelectorAll('.contrdd');
		/*this.reactSwipe.prev();*/
	}
	render(){
		/*this指向*/
		let call=(index, elem)=>{
			/*如果大于正常页数，就进行切割*/
			if(this.state.sum<this.state.actualSum){
				index=(index)%2;
			}
			contDOM.forEach((value,index)=>{
				value.classList.remove('is-active')
			})
			contDOM[index].classList.add('is-active')
		}
		let opt={
			callback(index, elem){
				call(index, elem)
			}
		}
		return (
			<div>
				<ReactSwipe className="carousel" ref={(reactSwipe)=>{this.reactSwipe=reactSwipe}} swipeOptions={opt}>
				{this.state.list}
				</ReactSwipe>
				<ul className='baner_dd'>
					{this.state.dd}
				</ul>
			</div>
		)
	}
}

export default Banner;