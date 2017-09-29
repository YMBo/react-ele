import React,{Component} from 'react';
/*商品页*/
class ListCon extends Component{
	constructor(){
		super()
		this.state={
			openMore:false,
		}
	}
	handleClick(){
		this.setState({
			openMore:!this.state.openMore
		})
	}
	render(){

		return(
			<dt id={'menu' +this.props.index}>
				<div className='commodity_main_menu_title'>
					<strong>{this.props.value.name}</strong>
					<span>{this.props.value.description}</span>
				</div>
				<div className='commodity_main_menu_more' >
					<span className='more_icon' key={this.props.index} onClick={this.handleClick.bind(this)}></span>
					<p className='popup'style={{display:`${this.state.openMore?'block':'none'}`}}>
						<span>{this.props.value.name} </span>
						<span>{this.props.value.description}</span>
					</p>
				</div>
			</dt>
		)
	}
}
export default ListCon;