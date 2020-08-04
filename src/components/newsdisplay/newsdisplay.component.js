
import React from 'react';

import Empty from '../empty/empty.component';
import './newsdisplay.styles.css';

const Newsdisplay=({articlesArrayList})=> {
       
		if(Object.keys(articlesArrayList).length === 0 || Object.keys(articlesArrayList).length === -1){

		return (<Empty />)
	    }
	    else{
		return (<div className="newsDisplayDiv"> 
				    
		    {articlesArrayList.map((article,i)=>{

		    	
		    	let url = article.multimedia.length ? article.multimedia[2].url : "" ;
		    	
		    	return (
		    		<div className="card">
			<img src={url}	alt="news_image" height="75px" width="75px"/>
			<div className="content">
			<h5> {article.title}</h5>
			
			 <h6> {article.abstract}</h6>
			<h6><a href={article.url} target="_blank" rel="noopener noreferrer">Click here</a> to  Read more</h6>			
		   </div>
		</div>
		    	)
		    })

		   }
		
		</div>);
	}
	
}

export default Newsdisplay;
