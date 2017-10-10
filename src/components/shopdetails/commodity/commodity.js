import React,{Component} from 'react';
import ListCon from '../listCon/listCon.js'
import './commodity.css'
/*商品页*/
class Commodity extends Component{
	constructor(){
		super()
		this.state={
			scroll:null,
			current:0
		}
	}
	componentDidUpdate(){
		this._computListHeight();
	}
	componentDidMount() {
		/*初始化*/
		/*为了顶部吸附*/
		let headerHeight=document.querySelector('.shoplist_header').offsetHeight;
		this.body.style.height=window.screen.height-this.body.offsetTop+headerHeight+'px';
		this._scrollTogether=this._scrollTogether.bind(this);
		this.main.addEventListener('scroll',this._scrollTogether);
	}
	componentWillUnmount(){
		this.main.removeEventListener('scroll',this._scrollTogether)
	}
	/*tab点击跳转*/
	handleClickRun(id){
		this.isScroll=false;
		this._animate(this.main,this.main.scrollTop,this.listHeight[id].pos);
		this._run(id);
	}
	_scrollTogether(){
		let headerHeight=document.querySelector('.shoplist_header').offsetHeight;
		this.main.scrollTop>headerHeight?(document.querySelector('.scrollMain').scrollTop=headerHeight)
		:(document.querySelector('.scrollMain').scrollTop=this.main.scrollTop);
		/*tab和列表联动,控制tab*/
		if(!this.isScroll){return;}
		this._posCalc(this.listHeight,this.main.scrollTop);
	}
	/*计算右侧每一类别对应高度*/
	_computListHeight(){
		if(this._computListHeight.flag){return;}
		let allDt=this.listHeightDom;
		if(allDt.getElementsByTagName('dt').length!==0){
			for(let i=0;i<allDt.getElementsByTagName('dt').length;i++){
				this.listHeight.push({
					index:i,
					pos:allDt.getElementsByTagName('dt')[i].offsetTop
				})
			}
			this._computListHeight.flag=true;
		}
	}
	/*是否手动滚动*/
	isScroll=true;
	listHeight=[]
	/*计算当前分类*/
	_posCalc(pos,y){
		if(pos.length < 2){//只有一个分类返回当前位置
			this._run(pos[0].index);
			return;
		}
		let prevArr=pos.slice(0,parseInt(pos.length/2,10));
		let nextArr=pos.slice(parseInt(pos.length/2,10));
		let prevArrIndex=prevArr[prevArr.length-1];
		let nextArrIndex=nextArr[0];
		if(prevArrIndex.pos>Math.abs(y)){
			this._posCalc(prevArr,y);
			return;
		}else if(nextArrIndex.pos<Math.abs(y)){
			this._posCalc(nextArr,y);
			return;
		}else if(prevArrIndex.pos<=Math.abs(y)&&nextArrIndex.pos>Math.abs(y)){
			if(prevArrIndex.index===this.state.current){return;}
			this.setState({
				current:prevArrIndex.index
			})
			return;
		}
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
		this.setState({
			current:id
		})
	}
	/*滚动动画*/
	// 当前值
	// 目标值
	_animate(obj,now,target){
		this.isScroll=false;
		/*是否滚动过头了（虽然过头但是显示正常）*/
		obj.scrollTop=Math.ceil(now+(target-now)/4);
		if(obj.scrollHeight-obj.scrollTop<=obj.offsetHeight+4){
			obj.scrollTop=(obj.scrollHeight-obj.offsetHeight);
			/*定时器是因为这个最后的滚动还没有完成就会触发滚动事件*/
			let timer=setTimeout(()=>{
				this.isScroll=true;
				clearTimeout(timer)
			},50);
			return;
		}else if(Math.abs(obj.scrollTop-target)<=4){
			obj.scrollTop=target;
			let timer=setTimeout(()=>{
				this.isScroll=true;
				clearTimeout(timer)
			},50);
			return;
		}else{
			requestAnimationFrame(()=>{
				this._animate(this.main,obj.scrollTop,target)
			})
		}
		
	}
	render(){
		/*数据处理*/
		let data=this.props.data?this.props.data:[];
		/*列表*/
		let listDomTab=data.map((value,index)=>{
			return(<li className={`${this.state.current===index?'active':''}`} key={index} onClick={this.handleClickRun.bind(this,index)}>
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
			return(
				/*标题*/
				<dl key={index}>
					<ListCon index={index} value={value} />
					{listDomDes}
				</dl>
			)
		});
		return(
			<div className='commodity'  ref={(body) => { this.body = body; }}>
				<ul className='list_cont' ref={(category)=>{this.category=category}}>
					{listDomTab}
				</ul>
				<div className='commodity_main' ref={(main)=>{this.main=main}}>
					<div ref={(listHeightDom)=>this.listHeightDom=listHeightDom} className='commodity_main_menu'>
						{listDomMain}
					</div>
				</div>
			</div>
		)
	}
}
export default Commodity;