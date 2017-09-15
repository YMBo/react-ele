import React,{Component} from 'react';
import './returnTop.css';

class ReturnTop extends Component{
	constructor(){
		super();
		this.state={
			opa:true,
			dis:true
		}
	}
	componentDidMount(){
		document.addEventListener('scroll',this._move.bind(this))
	}
	componentWillUnmount(){
		document.removeEventListener('scroll',this._move.bind(this))
	}
	_move(){
		this._throttle(this.resizeTop,this);
	}
	handleGoBack(){
		document.body.scrollTop =0;
	}
	resizeTop(){
		if(window.scrollY>500){
			this.setState({
				dis:false,
			});
			setTimeout(()=>{
				this.setState({
					opa:false
				})
			},100)
		}else{
			this.setState({
				opa:true
			});
			setTimeout(()=>{
				this.setState({
					dis:true
				})
			},800)
		}
	}
	/*函数节流*/
	_throttle(method,context){
		clearTimeout(method.tId);
		method.tId=setTimeout(function(){
			method.call(context)
		},100)
	}
	render(){
		return(
			<div className='returnTop' onClick={this.handleGoBack.bind(this)} style={{opacity:`${this.state.opa?0:1}`,display:`${this.state.dis?'none':''}`}}>
				<svg className="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M32 0h960v156.8H32V0z m960 710.4h-240V1024h-480v-313.6H32L512 236.8l480 473.6z"  fill="#999999"></path></svg>
			</div>
		)
	}
}

export default ReturnTop;