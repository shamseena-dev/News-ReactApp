import React from 'react';
import './searchbar.styles.scss';


const Searchbar= ({searchChange})=>{

			return(
			<div className="search">
				<h1>New York Times News </h1>
				
				<input 
					type="search" 
					placeholder="search headlines here" 
					className="searchBar" 
					onChange={searchChange} />
				
			</div>
			);
	}

export default Searchbar;