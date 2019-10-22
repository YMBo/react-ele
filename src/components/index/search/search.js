import React,{Component} from 'react';
import './search.css';

class Search extends Component{
	constructor(){
		super();
		this.state={
			support:false,
			css:null,
			height:0
		}
	}
	componentDidMount(){
		if (CSS.supports("position", "sticky") || CSS.supports("position", "-webkit-sticky")) {
		    // 支持 sticky,顶部吸附
			this.setState({
				support:true
			})
		}else{
			let offsetY=this.searchDOM.offsetTop;
			/*为了传递参数和配合解绑事件*/
			this._scrollTop=this._scrollTop.bind(this,offsetY);
			document.addEventListener('scroll',this._scrollTop)
		}
	}

	componentWillUnmount(){
			document.removeEventListener('scroll',this._scrollTop);
	}
	_scrollTop(offsetY){
		let css=null;
		let height=this.searchDOM.offsetHeight;
		if(window.scrollY>offsetY){
			css={
				position:'fixed',
				top:0,
				zIndex:999,
			}
		}else{
			css={
				position:'static',
			}
		}
		this.setState({
			css,
			height
		})
	}
	render(){
		return(
			<div className='search_Box'  style={this.state.support? {position: 'sticky',top: '-1px',zIndex: 999}:{height:this.state.height===0?null:this.state.height}}>
				<div ref={(div)=>{this.searchDOM=div;}}  className='search' style={this.state.support? null : this.state.css}>
					<a className='search_content'>
						<i className='search_icon'></i><span className='search_placeholder'>搜索商家、商品名称@</span>
					</a>
				</div>
			</div>
		)
	}
}

export default Search;