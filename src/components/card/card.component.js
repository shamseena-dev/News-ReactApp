import React from 'react';
import './card.styles.css';

const Card=({imgurl,title, abstract, url})=>{
	return(
	




		<div className="card">
			<img src={imgurl}	alt="news_image" height="75px" width="75px"/>
	
			<h5> {title}</h5>
			
			 <h6> {abstract}</h6>
			<h6><a href={url} target="_blank" rel="noopener noreferrer">Click here</a> to  Read more</h6>			
		   
		</div>
		)

}
export default Card;
