	import React from 'react';
	import Card from './Card';
	const CardList =({ robots }) =>{
		console.log('CardList');
		//To try "ErrorBoundary" component
		// if(true)
		// {
		// 	throw new Error('nooo');
		// }
		const cardsArray = robots.map((user , index) =>{
			return (<Card 
			key={robots[index].id} 
			id={robots[index].id} 
			name={robots[index].name} 
			email={robots[index].email}/>
			);
		})
		return (
			<div>
				{cardsArray}
			</div>
			);
		}
	
	

	export default CardList;