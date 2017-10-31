import React,{Component} from 'react';
import Selected from '../selected/selected.js'
import './footer.css'

class Footer extends Component{
	constructor(){
		super()
		this.state={
			showList:false
		}
		this._transitionEndCover=this._transitionEndCover.bind(this)
	}
	componentDidMount(){
		this.cover.addEventListener("webkitTransitionEnd", this._transitionEndCover, false); 
	}
	componentWillUnmount(){
		this.cover.removeEventListener("webkitTransitionEnd", this._transitionEndCover, false); 
	}
	_transitionEndCover(){
		if(!this.state.showList){
			this.cover.style.display='none';
			this.main.style.opacity=0;
		}
	}
	handleFooterAdd(index){
		/*增加对应数量,第一个参数为索引，第二个参数为类别id*/
		this.props.handleFooterAdd(index,this.props.mainFoods[index].id)
	}
	handleFooterCut(index){
		/*减少数量*/
		this.props.handleFooterCut(index,this.props.mainFoods[index].id)
	}
	handleClick(){
		this.cover.removeAttribute('style');
		this.main.style.opacity=1;
		this.setState({
			showList:!this.state.showList
		})
	}
	render(){
		let list=this.props.mainFoods.map((value,index)=>{
			return(
				<li className='footer_all_tip_main_list' key={index}>
					<span className="entityList-entityname_1">
						<em className="entityList-entityname_1_1">{value.name}</em>
					</span>
					<span className="entityList-entityname_2">
						<span className="entityList-entityname_2_1">{value.price*value.quantity}</span>
					</span>
					<span className="entityList-entityname_3 food_add">
						<Selected  
						quantity={value.quantity} 
						handleSubmit={this.handleFooterAdd.bind(this,index)}
						handleSubmitCut={this.handleFooterCut.bind(this,index)}
						/>
					</span>
				</li>
			)
		})
		return(
			<footer className='shop_footer'>
				<div onClick={this.handleClick.bind(this)} ref={(cover)=>{this.cover=cover}} style={{'display':'none'}} className={`footer_all_list_cover ${this.state.showList?'footer_all_list_cover_enter':'footer_all_list_cover_leave'}`} ></div>
				<div className={`footer_all_tip_list ${this.state.showList?'footer_all_tip_list_on':''}`}>
					<div ref={(main)=>{this.main=main}} style={{opacity:0}}>
						<div className='footer_all_tip_title'>
							<div className='aleady_foods'>
								<span className='aleady_foods_title'>已选商品</span>
							</div>
							<a href="javascript:void(0)" className='aleady_click'>
								<svg viewBox="0 0 24 32" version="1.1"><path fill="#bbb" fillRule="evenodd" d="M21.5 10h-19c-1.1 0-1.918.896-1.819 1.992l1.638 18.016C2.419 31.104 3.4 32 4.5 32h15c1.1 0 2.081-.896 2.182-1.992l1.637-18.016A1.798 1.798 0 0 0 21.5 10zM8 28H5L4 14h4v14zm6 0h-4V14h4v14zm5 0h-3V14h4l-1 14zm2-24h-2.941l-.353-2.514C17.592.669 16.823 0 15.998 0H8c-.825 0-1.593.668-1.708 1.486L5.94 4H3a3 3 0 0 0-3 3v1h24V7a3 3 0 0 0-3-3zM8.24 2h7.52l.279 2H7.96l.28-2z"/></svg>
								<span>清空</span>
							</a>
						</div>
						<div className='footer_all_tip_main'>
							<ul>
								{list}
							</ul>
						</div>
					</div>
				</div>
				<div className='shop_footer_box'>
					<span className={`${this.props.num===0?'isNumNone':''} shopping_footer`} data-quantity={this.props.num} onClick={this.handleClick.bind(this)}></span>
					<div className='shopping_footer_middle'>
						<p className='shop_price'>
							<span>¥{this.props.allPirce}</span>
						</p>
						<p className='kd_price'>{this.props.data.piecewise_agent_fee}</p>
					</div>
					<a href="javascript:void(0)" className={`shoping_submit 
						${this.props.allPirce>=this.props.data.float_minimum_order_amount
						?'':'isdisable'}`}>
						{this.props.allPirce>=this.props.data.float_minimum_order_amount
						?<span>去结算</span>
						:<span>还差¥{this.props.data.float_minimum_order_amount-this.props.allPirce}起送</span>}
					</a>
				</div>
			</footer>
		)
	}
}

export default Footer;