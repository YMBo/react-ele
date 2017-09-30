import React,{Component} from 'react';
import BScroll from 'better-scroll';
import ListCon from '../listCon/listCon.js'
import './commodity.css'
/*商品页*/
class Commodity extends Component{
	constructor(){
		super()
		this.state={
			openMore:false,
			scroll:null,
			current:0
		}
	}
	/*注意，要更新一下，因为dom的高度发生了变化*/
	componentDidUpdate(){
		this.state.scroll.refresh();
	}
	componentDidMount() {
		/*初始化*/
		this.body.style.height=window.screen.height-this.body.offsetTop+'px';
		let scroll = new BScroll(document.querySelector('.commodity_main'),{//初始化BScroll对象
			scrollY:true,
			probeType:3,
			bounce: false,
			momentum:true,
			HWCompositing: true ,
			click: true
		});
		this.setState({
			scroll
		});
		scroll.on('scroll',(pos) => {//商品滚动
		})
	}
	componentWillUnmount(){
		this.scroll.destroy();
	}
	handleClick(){
		this.setState({
			openMore:!this.state.openMore
		})
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
	/*点击控制*/
	_run(id){
		this.state.scroll.scrollToElement('#menu' + id,400);
		this.setState({
			current:id
		})
	}
	render(){
/*数据处理*/
		let data=this.props.data?this.props.data:[];
		/*列表*/
		let listDomTab=data.map((value,index)=>{
			return(<li className={`${this.state.current===index?'active':''}`} key={index} onClick={this._run.bind(this,index)}>
					{value.icon_url!==''?
					<img alt={value.name} src={`//fuss10.elemecdn.com/${this._formatImg(value.icon_url)}?imageMogr/format/webp/thumbnail/18x/`} />
					:''
					}
					<span>{value.name}</span>
				</li>)
		})
		/*主内容*/
		let listDomMain=data.map((value,index)=>{
			/*内容*/
			let listDomDes=value.foods.map((valueDes,index)=>{
				return(
				<dd className='commodity_main_list' key={index}>
					<div>
						<div className='commodity_main_list_c'>
							<span className='commodity_main_list_img'>
								<img alt={valueDes.name} title={valueDes.name} src={`https://fuss10.elemecdn.com/${this._formatImg(valueDes.image_path)}?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/`} />
							</span>
							<section className='commodity_main_list_des'>
								<header className='commodity_main_list_des_title'>
									<span>{valueDes.name}</span>
								</header>
								<p className='commodity_main_list_des_ev'>
									{valueDes.description}
								</p>
								<p className='food_buy'>
									<span>月售{valueDes.month_sales}份</span>
									<span>好评率{100*(valueDes.satisfy_count/valueDes.rating_count).toFixed(2)}%</span>
								</p>
								<strong className='food_money'>
									<span>{valueDes.min_purchase}</span>
								</strong>
								<div className='food_add'>
									<span className='food_add_box'>
										<a href="javascript:void(0)" className='food_add_add'>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" version="1.1"><path fill="none" d="M0 0h44v44H0z"/><path fillRule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clipRule="evenodd"/></svg>
										</a>
									</span>
								</div>
							</section>
						</div>
					</div>
				</dd>
				)
			})
			return([
				/*标题*/
				<ListCon index={index} value={value} />,
				...listDomDes
			])
		});
		return(
			<div className='commodity'  ref={(body) => { this.body = body; }}>
				<ul className='list_cont' ref={(category)=>{this.category=category}}>
					{listDomTab}
				</ul>
				<div className='commodity_main'>
					<dl className='commodity_main_menu'>
						{listDomMain}
					</dl>
				</div>
			</div>
		)
	}
}
export default Commodity;