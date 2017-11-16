import React,{Component} from 'react';
import ListCon from '../listCon/listCon.js'
import Footer from '../footer/footer.js'
import MainList from './mainList.js'
import Category from './category.js'
import './commodity.css'
/*商品页*/
class Commodity extends Component{
	constructor(){
		super()
		this.state={
			scroll:null,
			current:0,
			num:0,
			allPirce:0,
			/*商家id*/
			id:0,
			fatherCate:{},
			/*商家商品信息的存储*/
			foodsSave:{}
		}
	}
	isFirst=true
	componentWillReceiveProps(){
		/*初始化*/
		if(!this.isFirst){return;}
		this.isFirst=false;
		setTimeout(()=>{
			let id=0;
			id=this.props.basicData.id?this.props.basicData.id:0;
			let allSelected=this._getLocalStorage();
			/*总数量*/
			let allNum=0;
			/*总价*/
			let allPirce=0;
			/*同一类商品个数*/
			let categoryObj={};
			if(allSelected&&allSelected[id]){
				allSelected[id][0].entities.forEach((value,index)=>{
					allNum+=(value.quantity)*10000;
					allPirce+=(value.view_discount_price)*10000 ;
					let everyNum={};
					/*同一商品的数量*/
					let selectNum=0;
					/*一类食物的总量*/
					let same=allSelected[id][0].entities.filter((valueE,indexE)=>{
						return value.id===valueE.id
					})
					same.forEach((value,index)=>{
						selectNum=selectNum+value.quantity;
					})
					everyNum[value.id]={
						id:value.id,
						num:selectNum
					}
					categoryObj={
						...categoryObj,
						...everyNum
					}
				});
				this.setState({
					num:allNum/10000,
					allPirce:allPirce/10000,
					foodsSave:allSelected,
					id:id,
					/*每个类别选择情况*/
					fatherCate:{
						...this.state.fatherCate,
						...categoryObj
					}
				})
			}else{
				this.setState({
					id:id
				})
			}
		},50)
	}
	componentDidUpdate(){
		this._computListHeight();
	}
	componentDidMount() {
		/*初始化*/
		/*为了顶部吸附*/
		let headerHeight=document.querySelector('.shoplist_header').offsetHeight;
		for(let i=0;i<document.querySelectorAll('.scrollBoxL').length;i++){
			document.querySelectorAll('.scrollBoxL')[i].style.height=document.body.clientHeight-this.body.offsetTop+headerHeight+'px';
		}
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
	handleSubmitCut(thisIndex,foodIndex,category_id,item_id){
		this.isFirst=false
		/*同一类商品总数量*/
		let category_num=0;
		/*总数量*/
		let allNum=0;
		/*总价*/
		let allPirce=0;
		let id=this.state.id;
		let thisData=this.props.data[thisIndex].foods[foodIndex];
		let alreadySelect=this.state.foodsSave;
		/*同一商品的数量*/
		let selectNum=0;
		/*调整后的值*/
		let adjArr=[]
		/*如果存储过值*/
		if(!alreadySelect){return}
		alreadySelect[id][0].entities.forEach((value,index)=>{
			/*如果选的是同一个*/
			if(value.item_id===thisData.item_id){
				selectNum=--value.quantity;
				if(selectNum<=0){
					adjArr=[
						...alreadySelect[id][0].entities.slice(index+1),
						...alreadySelect[id][0].entities.slice(0,index)
					]
					alreadySelect[id][0].entities=adjArr;
					/*如果没选中了，就让当前价格为0*/
					value.view_discount_price=0;
				}else{
					value.quantity=selectNum;
					value.view_discount_price=thisData.specfoods[0].price*selectNum;
			    	   	value.view_original_price=thisData.specfoods[0].price*selectNum;
				}
			}
			allNum+=(value.quantity)*10000;
			allPirce+=(value.view_discount_price)*10000 ;
			if(value.id===category_id){
				category_num=category_num+value.quantity;
			}
		})
		this._saveLocalStorage(alreadySelect);
		let categoryObj={};
		categoryObj[category_id]={
			id:category_id,
			num:category_num
		}
		this.setState({
			num:allNum/10000,
			allPirce:allPirce/10000,
			foodsSave:alreadySelect,
			fatherCate:{
				...this.state.fatherCate,
				...categoryObj
			}
		})	
	}
	handleSubmit(thisIndex,foodIndex,category_id,item_id,event){
		this.isFirst=false
		/*同一类商品总数量*/
		let category_num=0;
		/*总数量*/
		let allNum=0;
		/*总价*/
		let allPirce=0;
		let id=this.state.id;
		let obj={};
		/*thisIndex表示类别*/
		let thisData=this.props.data[thisIndex].foods[foodIndex];
		let alreadySelect=this.state.foodsSave;
		/*同一商品的数量*/
		let selectNum=1;
		/*是否为同种*/
		let footSame=false;
		/*如果存储过值且存储过当前商家*/
		if(alreadySelect && alreadySelect[id]){
			alreadySelect[id][0].entities.forEach((value,index)=>{
				/*如果选的是同一个*/
				if(value.item_id===thisData.item_id){
					footSame=true;
					selectNum=++value.quantity;
					value.quantity=selectNum;
					value.view_discount_price=thisData.specfoods[0].price*selectNum;
			    	   	value.view_original_price=thisData.specfoods[0].price*selectNum;
					obj=alreadySelect;
				}
			})
			if(!footSame){
				/*如果没有就新增*/
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
		/*如果没存储过当前商家*/
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
			allNum+=(value.quantity)*10000;
			allPirce+=(value.view_discount_price)*10000 ;
			if(value.id===category_id){
				category_num=category_num+value.quantity;
			}
		});
		/*如果没存储过当前商家*/	
		if(alreadySelect&& !alreadySelect[id]){
			obj={
				...alreadySelect,
				...obj
			}
		}

		this._saveLocalStorage(obj);
		let categoryObj={};
		categoryObj[category_id]={
			id:category_id,
			num:category_num
		}
		/*fatherCate表示商品每一个类别选中食物总量*/
		this.setState({
			num:allNum/10000,
			allPirce:allPirce/10000,
			foodsSave:obj,
			fatherCate:{
				...this.state.fatherCate,
				...categoryObj
			}
		})
	}
	/*页脚的商品整合里的add操作*/
	handleFooterAdd(index,lieBid){
		let thisFoods=this.state.foodsSave;
		let num=0;
		let allPirce=0;
		thisFoods[this.state.id][0].entities[index].quantity++;
		/*计算选中商品总个数和总价*/
		thisFoods[this.state.id][0].entities.forEach((value,index)=>{
			num=num+value.quantity;
			allPirce=allPirce+(value.quantity*value.price)
		})
		let categoryObj={};
		categoryObj[lieBid]={
			id:lieBid,
			num:this.state.fatherCate[lieBid].num+1
		}
		this.setState({
			allPirce:allPirce,
			num:num,
			foodsSave:thisFoods,
			/*类别数量控制*/
			fatherCate:{
				...this.state.fatherCate,
				...categoryObj
			}
		})
		this._saveLocalStorage(thisFoods);
	}
	/*页脚的商品整合里的cut操作,第二个参数是点击食物的类别id*/
	handleFooterCut(index,lieBid){
		let thisFoods=this.state.foodsSave;
		let thisFoodsArr=[];
		let num=0;
		let allPirce=0;
		/*当前类别计数*/
		if(thisFoods[this.state.id][0].entities[index].quantity-1===0){
			thisFoodsArr=[
				...thisFoods[this.state.id][0].entities.slice(0,index),
				...thisFoods[this.state.id][0].entities.slice(index+1)
			]
			thisFoods[this.state.id][0].entities=thisFoodsArr;
		}else{
			thisFoods[this.state.id][0].entities[index].quantity--;
		}
		/*计算选中商品总个数和总价*/
		thisFoods[this.state.id][0].entities.forEach((value,index)=>{
			num=num+value.quantity;
			allPirce=allPirce+(value.quantity*value.price)
		})
		let categoryObj={};
		categoryObj[lieBid]={
			id:lieBid,
			num:this.state.fatherCate[lieBid].num-1
		}
		this.setState({
			allPirce:allPirce,
			num:num,
			/*所有购物车的商品集合*/
			foodsSave:thisFoods,
			/*按类别的id、num对的集合*/
			fatherCate:{
				...this.state.fatherCate,
				...categoryObj
			}
		})
		this._saveLocalStorage(thisFoods);
	}
	/*清空购物车*/
	emptyAllFodds(){
		let thisShopping={};
		/*清空主内容和购物车*/
		thisShopping[this.state.id]=[{entities:[]}];
		/*清空类别，左侧aside*/
		let fatherCate={...this.state.fatherCate}
		/*fatherCate[value].num=0;循环里不这么做的原因是在category组件里我设置了传进去的值变化才更新，这里是对象，所以要新建一个对象*/
		for(let  value in fatherCate){
			fatherCate[value]={
				...fatherCate[value],
				num:0
			}
		}
		this.setState({
			allPirce:0,
			num:0,
			foodsSave:{
				...this.state.foodsSave,
				...thisShopping
			},
			/*类别*/
			fatherCate:fatherCate
		})
		/*存商家的购物车信息*/
		this._saveLocalStorage({
				...this.state.foodsSave,
				...thisShopping
		});
	}
	_filter(para,arr){
		return arr.filter((value,index)=>{
			return para===value.item_id
		})
	}
	render(){
		let id=this.state.id;
		let allSelected=this.state.foodsSave;
		let isSave=null;
		/*如果商家的商品的选中信息存在*/
		if(allSelected && allSelected[id]){
			/*选中的商品*/
			isSave=allSelected;
		}
		/*数据处理*/
		let data=this.props.data?this.props.data:[];
		/*列表*/
		let listDomTab=data.map((value,index)=>{
			return( <Category 
				value={value} 
				index={index} 
				key={index} 
				type={value.type} 
				nums={this.state.fatherCate[value.id]}
				current={this.state.current}
				handleClickRun={this.handleClickRun.bind(this)} /> )
		})
		/*主内容*/
		let listDomMain=data.map((value,index)=>{
			/*内容*/
			let thisIndex=index;
			let listDomDes=value.foods.map((valueDes,index)=>{
				return(
					<MainList 
					alreadyNum={isSave?
						(this._filter(valueDes.item_id,isSave[id][0].entities).length===0
						?0
						:this._filter(valueDes.item_id,isSave[id][0].entities)[0].quantity)
						:0}  
					key={index} 
					valueDes={valueDes}
					handleSubmitCut={this.handleSubmitCut.bind(this,thisIndex,index,valueDes.category_id,valueDes.item_id)} 
					handleSubmit={this.handleSubmit.bind(this,thisIndex,index,valueDes.category_id,valueDes.item_id)}
					/>
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
				<Footer 
				allPirce={this.state.allPirce} 
				num={this.state.num} 
				mainFoods={isSave?isSave[id][0].entities:[]} 
				data={this.props.basicData}
				handleFooterAdd={this.handleFooterAdd.bind(this)}
				handleFooterCut={this.handleFooterCut.bind(this)}
				emptyAllFodds={this.emptyAllFodds.bind(this)}
				/>
			</div>
		)
	}
}
export default Commodity;