import React from 'react';

const SearchBox = ({searchChange}) =>
{
	console.log('SearchBox');
	return(
		<div className = 'pa2'>
			<input 
				 title="Here you can see something"
				 className = 'pa3 ba b--green bg-lightest-blue'
				 type='search'
				 placeholder='Search robots'
				 onChange = {searchChange}
		     />
		</div>	 
		);
}

export default SearchBox;