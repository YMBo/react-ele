import React,{Component} from 'react'
import ActivityPage from '../listHeader/activityPage/activityPage.js'
import Star from '../listHeader/activityPage/star.js'
import EvaluateTab from './evaluateTab.js'
import './evaluate.css'

class Evaluate extends Component{
	constructor(){
		super()
		this.state={
			current:0
		}
	}
	handleClickTags(index){
		/*标签跳转*/
		this.setState({
			current:index
		})
	}
	render(){
		let tags=this.props.tags.map((value,index)=>{
			return <EvaluateTab 
				handleClickTags={this.handleClickTags.bind(this)} 
				value={value} 
				current={this.state.current}
				key={index} 
				index={index}/>
		})
		let dom=this.props.evaluateData.map((value,index)=>{
			return value.rated_at
		})
		return (
			<div>
				<section className='evaluate_title'>
					<div className='evaluate_title_num'>
						<strong className='evaluate_title_source'>4.7</strong>
						<p className='evaluate_title_2'>综合评价</p>
						<p className='evaluate_title_3'>高于周边商家58.8%</p>
					</div>
					<div className='evaluate_score'>
						<div className='evaluate_score_0'>
							<span>服务态度</span>
							<span className='evaluate_star_0'>
								<Star rating={4.5}/>
								<span className="evaluate_star_1">4.8</span>
							</span>
						</div>
						<div className='evaluate_score_0'>
							<span>服务态度</span>
							<span className='evaluate_star_0'>
								<Star rating={4.5}/>
								<span className="evaluate_star_1">4.8</span>
							</span>
						</div>
						<div className="evaluate_score_0">
							<span>送达时间</span>
							<span className="evaluate_star_0">32分钟</span>
						</div>
					</div>
				</section>
				<section className='evaluate_body'>
					<div className="evaluate_body_title">
						<ul>
							{tags}
						</ul>
					</div>
					<ul>
						<li></li>
					</ul>
				</section>
			</div>
		)
	}
}

export default Evaluate;
