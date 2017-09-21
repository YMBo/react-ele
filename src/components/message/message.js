import React,{Component} from 'react'
import './message.css'

class Message extends Component{
	_logout(){
		if(this.props.logout){
			this.props.logout();
			localStorage.removeItem('islogin');
			window.location.href='/';
		}
	}

	render(){
		return(
			<div>
				<ul className='message'>
					<li>
						<b>头像</b>
						<span className='message_right'>
							<input type="file" accept="image/jpeg,image/jpg,image/png"/>
							<span className='message_right_img'>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 122" version="1.1"><path xmlns="http://www.w3.org/2000/svg" fill="#DCDCDC" fillRule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"/></svg>
							</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1" fill="#bbb"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path></svg>
						</span>
					</li>
					<li>
						<b>用户名</b>
						<span className='message_right'>
							{this.props.name}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1" fill="#bbb"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path></svg>
						</span>
					</li>
				</ul>
				<h2 className='message_fg'>账号绑定</h2>
				<ul className='message'>
					<li>
						<span>
							<i className='message_phone_icon'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 16" version="1.1"><path fill="#0097FF" fillRule="evenodd" d="M1 0h9a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm.5 1a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-8zm4 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
							</i>
							<b>手机</b>
						</span>
						<span className='message_right'>
							<span>{String(this.props.phone).replace(/(\d{3})(\d{4})(\d{4})/g,'$1****$3')}</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1" fill="#bbb"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path></svg>
						</span>
					</li>
				</ul>
				<h2 className='message_fg'>安全设置</h2>
				<ul className='message'>
					<li>
						<b>登录密码</b>
						<span className='message_right setPassword'>
							未设置
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1" fill="#bbb"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path></svg>
						</span>
					</li>
				</ul>
				<button type="button" className="log_out" onClick={this._logout.bind(this)}>退出登录</button>
			</div>
		)
	}
}

export default Message;