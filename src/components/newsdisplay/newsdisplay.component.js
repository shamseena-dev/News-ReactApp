
import React from 'react';
import Card from '../card/card.component';
import Empty from '../empty/empty.component';
import './newsdisplay.styles.css';

const Newsdisplay=({articlesArrayList})=> {
       
		if(Object.keys(articlesArrayList).length === 0){

		return (<Empty />)
	    }
	    else{
		return (<div className="newsDisplayDiv"> 
				    
		    {articlesArrayList.map((article,i)=>{

		    	let imgurl=article.multimedia[2];
		    	
		    	return (
		    		<Card 
		    			key={i}
			    		title={article.title}
			    		
			    		image={article.multimedia[2].url}
			    		abstract={article.abstract}
			    		
			    		url={article.url}
		    		/>
		    	)
		    })

		   }
		
		</div>);
	}
	
}

export default Newsdisplay;
