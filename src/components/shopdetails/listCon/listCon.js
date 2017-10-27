import React,{Component} from 'react';
/*商品页*/
class ListCon extends Component{
	constructor(){
		super()
		this.state={
			openMore:false,
			name:''
		}
	}
	componentWillMount(){
		this.setState({
			name:this.props.value.name
		})
	}
	handleClick(){
		this.setState({
			openMore:!this.state.openMore
		})
	}
	shouldComponentUpdate(nextProps,nextStates){
		if(nextProps.value.name===this.props.value.name){
			return false;
		}else{
			return true;
		}
	}

	render(){
		console.log('刷他娘的')
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