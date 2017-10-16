import React,{Component} from 'react';
import ListCon from '../listCon/listCon.js'
import Footer from '../footer/footer.js'
import Selected from '../selected/selected.js'
import './commodity.css'
/*商品页*/
class Commodity extends Component{
	constructor(){
		super()
		this.state={
			scroll:null,
			current:0,
			num:0,
			allPirce:0
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
	_isAnimate=null
	_animate(obj,now,target){
		this.isScroll=false;
		window.cancelAnimationFrame(this._isAnimate)
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
			this._isAnimate=requestAnimationFrame(()=>{
				this._animate(this.main,obj.scrollTop,target)
			})
		}
		
	}
	_saveLocalStorage(obj){
		try{
			localStorage.setItem("currentSelected",JSON.stringify(obj))
		}catch (e){
			console.log(e)
		}
	}
	_getLocalStorage(){
		try{
			return JSON.parse(localStorage.getItem("currentSelected"))
		}catch (e){
			console.log(e)
		}
	}
	handleSubmitCut(thisIndex,foodIndex){
		console.log(1)
		/*总数量*/
		let allNum=0;
		/*总价*/
		let allPirce=0;
		let id=this.props.basicData.id;
		let thisData=this.props.data[thisIndex].foods[foodIndex];
		let alreadySelect=this._getLocalStorage();
		/*同一商品的数量*/
		let selectNum=0;
		/*如果存储过值*/
		if(alreadySelect){
			alreadySelect[id][0].entities.forEach((value,index)=>{
				/*如果选的是同一个*/
				if(value.id===thisData.category_id){
					selectNum=--value.quantity;
					if(selectNum<=0){
						alreadySelect[id][0].entities.splice(index,1)
					}else{
						value.quantity=selectNum;
						value.view_discount_price=thisData.specfoods[0].price*selectNum;
				    	   	value.view_original_price=thisData.specfoods[0].price*selectNum;
					}
				}
			})
		}
		alreadySelect[id][0].entities.forEach((value,index)=>{
			allNum+=value.quantity;
			allPirce+=value.view_discount_price;
		});
		this._saveLocalStorage(alreadySelect);
		this.setState({
			num:allNum,
			allPirce
		})
	}
	handleSubmit(thisIndex,foodIndex){
		if(this.props.addSelected){
			/*总数量*/
			let allNum=0;
			/*总价*/
			let allPirce=0;
			let id=this.props.basicData.id;
			let obj={};
			let thisData=this.props.data[thisIndex].foods[foodIndex];
			let alreadySelect=this._getLocalStorage();
			/*同一商品的数量*/
			let selectNum=1;
			/*是否为同种*/
			let footSame=false;
			/*如果存储过值*/
			if(alreadySelect){
				alreadySelect[id][0].entities.forEach((value,index)=>{
					/*如果选的是同一个*/
					if(value.id===thisData.category_id){
						footSame=true;
						selectNum=++value.quantity;
						value.quantity=selectNum;
						value.view_discount_price=thisData.specfoods[0].price*selectNum;
				    	   	value.view_original_price=thisData.specfoods[0].price*selectNum;
						obj=alreadySelect;
					}
				})
				if(!footSame){
					/*且有值*/
					alreadySelect[id][0].entities.push({
						"id": thisData.category_id,
						"sku_id": thisData.specfoods[0].sku_id,
						"item_id": thisData.item_id,
						"quantity": selectNum,
						"name": thisData.specfoods[0].name,
						"price": thisData.specfoods[0].price,
						"original_price": null,
						"packing_fee": 1,
						"stock": thisData.specfoods[0].stock,
						"specs": thisData.specfoods[0].specs,
						"attrs": thisData.attrs,
						"weight": thisData.specfoods[0].weight,
						"extra": {},
						"view_discount_price": thisData.specfoods[0].price*selectNum,
						"view_original_price": thisData.specfoods[0].price*selectNum
					})
					obj=alreadySelect;
				}
			}else{
				obj[id]=[
					{
					    "entities": [
					    	{
					    	    "id": thisData.category_id,
					    	    "sku_id": thisData.specfoods[0].sku_id,
					    	    "item_id": thisData.item_id,
					    	    "quantity": selectNum,
					    	    "name": thisData.specfoods[0].name,
					    	    "price": thisData.specfoods[0].price,
					    	    "original_price": null,
					    	    "packing_fee": 1,
					    	    "stock": thisData.specfoods[0].stock,
					    	    "specs": thisData.specfoods[0].specs,
					    	    "attrs": thisData.attrs,
					    	    "weight": thisData.specfoods[0].weight,
					    	    "extra": {},
					    	    "view_discount_price": thisData.specfoods[0].price*selectNum,
					    	    "view_original_price": thisData.specfoods[0].price*selectNum
					    	}
					    ],
					}
				];
			}
			obj[id][0].entities.forEach((value,index)=>{
				allNum+=value.quantity;
				allPirce+=value.view_discount_price;
			});
			this._saveLocalStorage(obj);
			this.props.addSelected(obj);
			this.setState({
				num:allNum,
				allPirce
			})
		}
	}
	render(){
		/*数据处理*/
		let data=this.props.data?this.props.data:[];
		console.log(data)
		/*列表*/
		let listDomTab=data.map((value,index)=>{
			return(<li className={`${this.state.current===index?'active':''}`} key={index} onClick={this.handleClickRun.bind(this,index)}>
					{value.icon_url!==''?
					<img alt={value.name} src={`//fuss10.elemecdn.com/${this._formatImg(value.icon_url)}?imageMogr/format/webp/thumbnail/18x/`} />
					:''}
					<span>{value.name}</span>
				</li>)
		})
		/*主内容*/
		let listDomMain=data.map((value,index)=>{
			/*内容*/
			let thisIndex=index;
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
									<span>{valueDes.specfoods[0].price}</span>
								</strong>
								<div className='food_add'>
								<Selected num={this.state.num} handleSubmitCut={this.handleSubmitCut.bind(this,thisIndex,index)} handleSubmit={this.handleSubmit.bind(this,thisIndex,index)}/>
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
				<div className='commodity_box'>
					<ul className='list_cont' ref={(category)=>{this.category=category}}>
						{listDomTab}
					</ul>
					<div className='commodity_main' ref={(main)=>{this.main=main}}>
						<div ref={(listHeightDom)=>this.listHeightDom=listHeightDom} className='commodity_main_menu'>
							{listDomMain}
						</div>
					</div>
				</div>
				<Footer allPirce={this.state.allPirce} num={this.state.num} data={this.props.basicData}/>
			</div>
		)
	}
}
export default Commodity;