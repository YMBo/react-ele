import React,{Component} from 'react'
import ActivitiesList from '../activitiesList/activitiesList.js'
import './shopInformation.css'

class ShopInformation extends Component{
	constructor(){
		super();
	}
	componentDidMount(){
		this._scrollTogether=this._scrollTogether.bind(this);
		this.body.addEventListener('scroll',this._scrollTogether);
	}
	componentWillUnmount(){
		this.body.removeEventListener('scroll',this._scrollTogether)
	}
	_scrollTogether(){
		/*联动*/
		let headerHeight=document.querySelector('.shoplist_header').offsetHeight;
		this.body.scrollTop>headerHeight?(document.querySelector('.scrollMain').scrollTop=headerHeight)
		:(document.querySelector('.scrollMain').scrollTop=this.body.scrollTop);
	}
	render(){
		return(
			<div ref={(body) => { this.body = body; }}className='shop_info'>
				<section className='section'>
					<h3 className="section-title">活动与服务</h3>
					<div className="activity-2iOA8_0">
						<ActivitiesList  value={{icon_name:'666',icon_color:'ccc',description:'55555'}}/>
						<ActivitiesList  value={{icon_name:'666',icon_color:'ccc',description:'55555'}}/>
						<ActivitiesList  value={{icon_name:'666',icon_color:'ccc',description:'55555'}}/>
					</div>
				</section>

				<section className="section">
					<h3 className="section-title">商家信息</h3>
					<ul className="section_information_list">
						<li>太平洋咖啡以谦卑感恩、卓越品质、诚信务实、创意无限作为品牌的核心价值，力求发展成为中国咖啡消费者最喜爱的、最具影响力的咖啡连锁品牌。主张中西文化交融且带有浓浓书卷气息的太平洋咖啡自进入内地以来，受到越来越多顾客的喜爱和称赞。太平洋咖啡也将与更多追求品味的有识之士一同分享咖啡殿堂里
						</li>
						<li>
							<span>商家电话</span>
							<span>
								<span><a href="tel:010-67113153">010-67113153</a></span>
								<svg className="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 547 987" width="100%" height="100%"><path d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"/></svg>
							</span>
						</li>
						<li>
							<span>地址</span>
							<span>北京市东城区崇文门外大街18号1幢F1-37号商铺</span>
						</li>
						<li>
							<span>营业时间</span>
							<span>10:00-21:30</span>
						</li>
					</ul>
				</section>
				<section className="section">
					<a href="/"
					className="section-title information_other">
						营业资质
						<svg className="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 547 987" width="100%" height="100%"><path d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"/></svg>
					</a>
				</section>
			</div>
		)
	}
}

export default ShopInformation;