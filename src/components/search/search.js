import React,{Component} from 'react';
import './search.css';

class Search extends Component{
	render(){
		return(
			<div className='search'>
				<a className='search_content'>
					<i className='search_icon'></i><span className='search_placeholder'>搜索商家、商品名称</span>
				</a>
			</div>
		)
	}
}

export default Search;