
import React from 'react';
import Card from "../card/card.component";
import Empty from '../empty/empty.component';
import './newsdisplay.styles.css';

const Newsdisplay=({articlesArrayList})=> {
       
		if(Object.keys(articlesArrayList).length === 0 || Object.keys(articlesArrayList).length === -1){

		return (<Empty />)
	    }
	    else{
		return (<div className="newsDisplayDiv"> 
				    
		    {articlesArrayList.map((article,i)=>{

		    	
		    	let url = article.multimedia ? article.multimedia[3].url : "" ;
		    	
		    	return (

		    		<Card imgurl={url} title={article.title} abstract={article.abstract} url={article.url} />

		    	
		    	)
		    })

		   }
		
		</div>);
	}
	
}

export default Newsdisplay;
