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
		document.addEventListener('scroll',()=>{
				this._throttle(this.resizeTop,this);
		})
	}
	handleGoBack(){
		document.body.scrollTop =0;
	}
	resizeTop(){
		if(window.scrollY>500){
			this.setState({
				dis:false
			});
			setTimeout(()=>{
				this.setState({
					opa:false
				})
			})
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
			<div className='returnTop' onClick={this.handleGoBack.bind(this)} style={{opacity:`${this.state.opa?0:1}`,display:`${this.state.dis?'none':'block'}`}}></div>
		)
	}
}

export default ReturnTop;