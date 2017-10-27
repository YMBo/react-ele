import './theBall.css'
export const  TheBall={
	newBall(event){
		let div=document.createElement('div');
		div.className='ballFather';
		document.body.appendChild(div);
		let sonDiv=document.createElement('div');
		sonDiv.className='ballSon'
		div.appendChild(sonDiv);
		let top=event.target.getBoundingClientRect().top;
		let left=event.target.getBoundingClientRect().left;
		div.style.left=left+'px';
		div.style.top=top+'px';
		let y = (window.innerHeight - top);
		div.style.display ='';
		div.style.webkitTransform = `translate3d(0,${y}px,0)`;
		div.style.transform = `translate3d(0,${y}px,)0`;
		sonDiv.style.webkitTransform = `translate3d(-${left-10}px,0,0)`;
		sonDiv.style.transform = `translate3d(-${left-10}px,0,0)`;
		setTimeout(()=>{
			document.body.removeChild(div);
			document.querySelector('.shopping_footer').classList.add("animation");
			setTimeout(()=>{
				document.querySelector('.shopping_footer').classList.remove("animation");
			},400)
		},600)
	}
}
