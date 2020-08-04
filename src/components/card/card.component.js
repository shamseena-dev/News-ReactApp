import React from 'react';
import './card.styles.css';

const Card=(props)=>{
	return(
		<div className="card">
			<img src={props.image}	alt="news_image" height="75px" width="75px"/>
			
			<h5> {props.title}</h5>
			
			 <h6> {props.abstract}</h6>
			<h6><a href={props.url} target="_blank" rel="noopener noreferrer">Click here</a> to  Read more</h6>			
		  
		</div>
		)

}
export default Card;
