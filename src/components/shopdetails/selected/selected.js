import React,{Component} from 'react'
class Selected extends Component{
	constructor(){
		super()
		this.state={
			display:false,
			index:0
		}
	}
	componentWillMount(){
		if( this.props.quantity && this.props.quantity!=0){
			this.setState({
				display:true,
				index:this.props.quantity
			})
		}
	}
	handleSubmit(){
		if(!this.state.display){
			this.setState({
				display:true
			})
		}
		this.setState({
			index:this.state.index<=0?1:++this.state.index
		})
		if(this.props.handleSubmit){
			this.props.handleSubmit()
		}
	}
	handleSubmitCut(){
		let index=--this.state.index;
		if(index<=0){
			this.setState({
				display:false
			})
		}
		this.setState({
			index:index
		})
		if(this.props.handleSubmitCut){
			this.props.handleSubmitCut()
		}
	}
	render(){
		return(
			<span className='food_add_box'>
				{this.state.display?<a href="javascript:void(0)" className='food_add_add'  onTouchStart={this.handleSubmitCut.bind(this)}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" version="1.1"><path fillRule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clipRule="evenodd"></path><path fillRule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clipRule="evenodd"></path></svg>
				</a>:null}
				{this.state.display?<span role="button" className="food_add_box_s">{this.state.index}</span>:null}
				<a href="javascript:void(0)" className='food_add_add'  onTouchStart={this.handleSubmit.bind(this)}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" version="1.1"><path fill="none" d="M0 0h44v44H0z"/><path fillRule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clipRule="evenodd"/></svg>
				</a>
			</span>
		)
	}
}

export default Selected;