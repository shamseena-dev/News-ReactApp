import React from 'react';
import './empty.styles.css';


class Empty extends React.Component{
	render(){
		return(
			<div className="empty">
				<h2>Oops!!! Sorry !! </h2>
			    <h2> There are no search results for this keyword currently.</h2>
			</div>
			)
	}
}
export default Empty;