import React from 'react';

const Card = ({id, name , email}) =>
{
	return(
		<div className = 'tc bg-light-green  dib br3 pa3 ma2 bw2 grow shadow-5'>
			<img src ={`https://www.gravatar.com/avatar/${id}?s=300&d=robohash`} alt='robots'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}


export default Card;