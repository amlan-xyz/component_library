import { Card } from '../../components/Card/Card'

import './style.css'

export function Cards(){
	return(
		<section className="cards">
			<div className="cards_container">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</section>	
	)
}