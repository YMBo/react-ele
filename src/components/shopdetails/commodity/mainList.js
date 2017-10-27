import React,{Component} from 'react'
import Selected from '../selected/selected.js'

class MainList extends Component{
	shouldComponentUpdate(nextProps,nextStates){
		/*如果选中的数量有值且没变或者食物名称没变就不render*/
		if(this.props.alreadyNum !== nextProps.alreadyNum){
			return true;
		}
		if(this.props.valueDes.name!==nextProps.valueDes.name){
			return true;
		}
		return false;
	}
	/*图片格式化*/
	_formatImg(src){
		let png=/png/g.test(src);
		src=`${src}${png?'.png':'.jpeg'}`
		let imgValue=src.split('');
		imgValue.splice(3,0,'/');
		imgValue.splice(1,0,'/');
		return imgValue.join('');
	}
	render(){
		return(
			<dd className='commodity_main_list'>
				<div>
					<div className='commodity_main_list_c'>
						<span className='commodity_main_list_img'>
							<img alt={this.props.valueDes.name} title={this.props.valueDes.name} src={`https://fuss10.elemecdn.com/${this._formatImg(this.props.valueDes.image_path)}?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/`} />
						</span>
						<section className='commodity_main_list_des'>
							<header className='commodity_main_list_des_title'>
								<span>{this.props.valueDes.name}</span>
							</header>
							<p className='commodity_main_list_des_ev'>
								{this.props.valueDes.description}
							</p>
							<p className='food_buy'>
								<span>月售{this.props.valueDes.month_sales}份</span>
								<span>好评率{100*(this.props.valueDes.satisfy_count/this.props.valueDes.rating_count).toFixed(2)}%</span>
							</p>
							<strong className='food_money'>
								<span>{this.props.valueDes.specfoods[0].price}</span>
							</strong>
							<div className='food_add'>
							<Selected quantity={this.props.alreadyNum} handleSubmitCut={this.props.handleSubmitCut} handleSubmit={this.props.handleSubmit}/>
							</div>
						</section>
					</div>
				</div>
			</dd>
		)
	}
}
export default MainList