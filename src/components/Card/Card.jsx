import './style.css'

import {SlPencil,SlTrash} from 'react-icons/sl'

export function Card({elements}){
	return (
		<div className="card">
			<div className="card_header">
				<div className="card_icons">
					<button className='card_icon'><SlPencil/></button>
					<button className='card_icon'><SlTrash/></button>
				</div>
				<img className="card_img" src="https://images.unsplash.com/photo-1691379635079-9f438036ea58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="spaceman" />	
			</div>
			<div className="card_body">
					<h3 className="card_title">Title</h3>
					<div className="card_content">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, velit.</p>
						<div className="card_btns">
							<button className='btn_secondary'>View</button>
						</div>
						
					</div>
			</div>
		</div>	
	)
}