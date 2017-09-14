import React,{Component} from 'react'
import './footer.css'

class Footer extends Component{
	render(){
		return(
			<footer className='index_footer'>
				<div className='index_footer_con'>
					<a href="" className='index_footer_a'>
						<svg className='index_footer_icon' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" ><path d="M524.925 840.479c-136.028 7.219-255.65-73.311-307.774-183.183-57.279-120.653-46.499-239.9 35.343-346.21 77.904-101.341 186.37-141.559 314.804-126.466 63.748 7.5 119.997 33.28 168.933 74.154 26.624 22.218 25.968 32.155-3.469 48.749-25.593 14.438-51.374 28.687-76.873 43.405-70.404 40.593-141.278 80.529-210.932 122.435-37.312 22.405-44.718 58.311-23.905 95.435 22.499 40.218 66.279 49.499 112.591 23.155 137.621-78.279 274.775-157.402 412.771-234.932 22.874-12.844 25.312-25.874 15.188-47.624-35.718-76.498-88.311-139.309-158.715-186.37-155.715-103.778-321.835-120.466-491.894-41.53-169.683 78.748-261.931 216.932-277.211 399.177-12.656 151.028 45.749 278.899 156.465 384.178 154.496 146.715 412.583 169.777 590.048 51.843 46.218-30.749 46.218-30.749 17.531-77.623-30.937-50.718-61.686-60.092-115.497-34.78-50.812 23.999-103.591 39.562-157.402 36.187z" fill="#2295FF" ></path><path d="M991.976 625.891c-2.531-36.28-22.593-65.717-39.843-96.185-5.625-9.938-14.625-6.094-22.78-1.594-31.593 17.812-63.186 35.812-95.060 53.155-13.5 7.406-15.938 16.313-8.156 29.343 18.187 30.093 36.187 60.279 53.53 90.842 7.594 13.219 16.594 16.313 29.718 8.156 19.030-11.813 38.718-22.874 57.092-35.624 16.5-11.344 26.155-27.28 25.499-48.093z" fill="#2295FF"></path></svg>
						<span className='index_footer_word current_word'>外卖</span>
					</a>
					<a href="" className='index_footer_a'>
						<svg className='index_footer_icon'  viewBox="-3 -3 45 45" version="1.1" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><g stroke="#666" strokeWidth="4" mask="url(#discover-regular.8ef537f_b)"><path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"></path></g><path stroke="#666" strokeWidth="2" d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"></path><path fill="#666" d="M15.693 24.636c-.692.276-1.02-.06-.747-.746l2.21-4.946c.225-.505.721-.602 1.122-.202l2.563 2.563c.394.394.31.893-.203 1.122l-4.945 2.209z"></path></g></svg>
						<span className='index_footer_word'>发现</span>
					</a>
					<a href="" className='index_footer_a'>
						<svg className='index_footer_icon'  viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><g stroke="#666" strokeWidth="4" mask="url(#order-regular.41c17f8_b)"><rect id="order-regular.41c17f8_a" width="38" height="38" rx="2"></rect></g><rect width="24" height="2" x="7" y="8" fill="#666" rx="1"></rect><rect width="20" height="2" x="7" y="17" fill="#666" rx="1"></rect><rect width="8" height="2" x="7" y="26" fill="#666" rx="1"></rect></g></svg>
						<span className='index_footer_word'>订单</span>
					</a>
					<a href="" className='index_footer_a'>
						<svg className='index_footer_icon'  viewBox="-1 0 40 34" version="1.1" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="#666" strokeWidth="4"><g mask="url(#profile-regular.c151d62_c)"><path id="profile-regular.c151d62_a" d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833z"></path></g><g mask="url(#profile-regular.c151d62_d)"><path id="profile-regular.c151d62_b" d="M0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path></g></g></svg>
						<span className='index_footer_word'>我的</span>
					</a>
				</div>
			</footer>
		)
	}
}

export default Footer;