import React,{Component} from 'react'
import './entry.css'

class Entry extends Component{
	/*图片格式化*/
	_formatImg(src){
		let png=/png/g.test(src);
		src=`${src}${png?'.png':'.jpeg'}`;
		let imgValue=src.split('');
		imgValue.splice(3,0,'/');
		imgValue.splice(1,0,'/');
		return imgValue.join('');
	}
	render(){
		let listDOM=this.props.data[1].map((value,index)=>{
			let imgSrc=this._formatImg(value.main_pic_hash);
			return (<a href="/" className='everyActivity' key={index}>
					<div className='content_wrapper'>
						<p className='tips1' style={{color:`${value.title_color}`}}>{value.title}</p>
						<p className='tips2'>{value.subtitle}</p>
					</div>
				<img className='icon' src={`//fuss10.elemecdn.com/${imgSrc}?imageMogr/format/webp/`} alt={value.title}/>
				</a>)
		})
		let listDOM2=this.props.data[2].map((value,index)=>{
			let imgSrc=this._formatImg(value.sub_pic_hash);
			return(
				<div className='find_active list2' key={index}>
					<a href='//h5.ele.me/freelunch/#/' className="sub-pic-hash">
					<img  src={`//fuss10.elemecdn.com/${imgSrc}?imageMogr/format/webp/`}  alt={value.subtitle}/>
					</a>
				</div>
			)
		})
		return (
			<section className='parts'>
				<div className='find_active'>
					{listDOM}
				</div>
				{listDOM2}
			</section>
		)
	}
}

export default Entry;