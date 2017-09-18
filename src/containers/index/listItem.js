import React,{Component} from 'react'
import { body } from '../../data/data.js'
import ListItem from '../../components/index/listItem/listItem.js'

class ListItemsmart extends Component{
	constructor(){
		super()
		this.state={
			listData:null,
			/*模拟第一页*/
			page:0,
			noMore:false
		}
	}
	componentWillMount(){
		this.setState({
			listData:body[0]
		})
	}
	componentDidMount(){
		this.isUnmount=false;
		document.addEventListener('scroll',this._more.bind(this))
	}
	componentWillUnmount(){
		this.isUnmount=true;
		document.removeEventListener('scroll',this._more.bind(this))
	}
	/*加载更多*/
	flag:false
	_more(){
		/**/
		if(this.flag){return}
		if(this.state.noMore){return;}
		if(window.document.body.offsetHeight-document.body.scrollTop<window.screen.height+200){
			/*正常情况下这应该是一个网络请求*/
			this.flag=true;
			setTimeout(()=>{
				/*如果已经销毁*/
				if(this.isUnmount){return;}
				if(body[this.state.page+1]){
					this.setState({
						listData:[...body[this.state.page+1],...this.state.listData],
						page:this.state.page+1
					})
				}else{
					this.setState({
						noMore:true
					})
				}
				this.flag=false;
			},1000)
		}
	}

	render(){
		return (
			<div>
				{this.state.listData.map((value,index)=>{return <ListItem data={value} key={index}/>})}
				{this.state.noMore?<div className='noMore'>没有更多了哦~</div>
				:<div className="loadMore"> 
					<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
					<path d="M955.261 575.322h-126.643c-34.955 0-63.322-28.37-63.322-63.322s28.37-63.322 63.322-63.322h126.643c34.955 0 63.322 28.37 63.322 63.322s-28.37 63.322-63.322 63.322v0zM780.616 332.925c-24.696 24.696-64.842 24.696-89.538 0s-24.696-64.842 0-89.538l89.538-89.538c24.696-24.696 64.842-24.696 89.538 0s24.696 64.842 0 89.538l-89.538 89.538zM512 1018.582c-34.955 0-63.322-28.37-63.322-63.322v-126.643c0-34.955 28.37-63.322 63.322-63.322s63.322 28.37 63.322 63.322v126.643c0 34.955-28.37 63.322-63.322 63.322v0zM512 258.707c-34.955 0-63.322-28.37-63.322-63.322v-126.643c0-34.955 28.37-63.322 63.322-63.322s63.322 28.37 63.322 63.322v126.643c0 34.955-28.37 63.322-63.322 63.322v0zM243.384 870.157c-24.696 24.696-64.842 24.696-89.538 0s-24.696-64.842 0-89.538l89.538-89.538c24.696-24.696 64.842-24.696 89.538 0s24.696 64.842 0 89.538l-89.538 89.538zM243.384 332.925l-89.538-89.538c-24.696-24.696-24.696-64.842 0-89.538s64.842-24.696 89.538 0l89.538 89.538c24.696 24.696 24.696 64.842 0 89.538-24.822 24.696-64.842 24.696-89.538 0v0zM258.707 512c0 34.955-28.37 63.322-63.322 63.322h-126.643c-34.955 0-63.322-28.37-63.322-63.322s28.37-63.322 63.322-63.322h126.643c34.955 0 63.322 28.37 63.322 63.322v0zM780.616 691.075l89.538 89.538c24.696 24.696 24.696 64.842 0 89.538s-64.842 24.696-89.538 0l-89.538-89.538c-24.696-24.696-24.696-64.842 0-89.538 24.822-24.696 64.842-24.696 89.538 0v0zM780.616 691.075z" fill="#555555"></path>
					</svg>
					<span>正在加载...</span> 
				</div>}
			</div>
		)
	}	
}

export default ListItemsmart;