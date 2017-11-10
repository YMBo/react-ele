import React,{Component} from 'react'
import './tabs.css'
class TabsLi extends Component{
	constructor(){
		super()
		this.state={
			current:0
		}
	}
	handClick(index){
		this.setState({
			current:index
		})
	}
	render(){
		return(
			<div>
				<div className='tabs_border_box'>
					{this.props.data.map((value,index)=>
						<div className={`tabs_border ${this.state.current===index?'tabs_border_active':' '}`} key={index} onClick={this.handClick.bind(this,index)}>
							<span className='tabs_border_tag'>{value.title}</span>
						</div>
					)}
				</div>
				{/*注意这个api*/}
				<div className='tabs_body'>
					{React.Children.map(this.props.children,(child)=>{
					    return <div   className='scrollBoxL' style={{display:`${Number(child.key)===Number(this.state.current)?'block ':'none'}`}}>{child}</div>
					})}
				</div>
			</div>
		)
	}
}
export default TabsLi;