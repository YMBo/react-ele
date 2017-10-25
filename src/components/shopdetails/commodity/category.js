import React,{Component} from 'react'

class Category extends Component{
	constructor(){
		super();
		this.state={
			display:false,
			num:0
		}
	}
	componentWillMount(){
		if(this.props.fatherCate[this.props.category_id]){
			if(this.props.category_id === this.props.fatherCate[this.props.category_id].id){
				this.setState({
					num:this.props.fatherCate[this.props.category_id].num
				})
			}
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
	handleClickRun(){
		if(this.props.handleClickRun){
			this.props.handleClickRun(this.props.index)
		}
	}
	render(){
		return(
			<li className={`${this.props.current===this.props.index?'active':''}`} onClick={this.handleClickRun.bind(this,this.props.index)}>
				{( (this.props.type===1)&&this.state.num!==0)?
				<span className="category_tip">
				{this.state.num}
				</span>:null}
				{this.props.value.icon_url!==''?
				<img alt={this.props.value.name} src={`//fuss10.elemecdn.com/${this._formatImg(this.props.value.icon_url)}?imageMogr/format/webp/thumbnail/18x/`} />
				:''}
				<span>{this.props.value.name}</span>
			</li>
		)
	}
}

export default Category;