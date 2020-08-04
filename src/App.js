
import React from 'react';

import Nav from './components/nav/nav.component';
import Searchbar from './components/searchbar/searchbar.component';
import Newsdisplay from './components/newsdisplay/newsdisplay.component';
import Footer from './components/footer/footer.component';
import Timer from './components/timer/timer.component.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends React.Component {
	/*constructor , and set initial state here*/
	constructor(){
		super();
		this.state={
			newsDisplayed:[],
			healthNews:[],
			sportsNews:[],
			searchField:' ',
			time:new Date()		
		}
	}

   /*To fetch News API */
	componentDidMount(){
		setInterval(()=>this.currentTime(),1000)

		let url = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=5GzApG1kCNcrlmsHGlzBAHEYIMVZpkEz';


		let url2= 'https://cors-anywhere.herokuapp.com/'+url;
		fetch(url2).then(resp=>resp.json())
		.then(data=>{
			
			return this.setState({newsDisplayed:data.results})
		});

		fetch("https://api.nytimes.com/svc/topstories/v2/health.json?api-key=5GzApG1kCNcrlmsHGlzBAHEYIMVZpkEz").then(resp=>resp.json())
		.then(data=>{
			
			return this.setState({healthNews:data.results})
		});
		fetch("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=5GzApG1kCNcrlmsHGlzBAHEYIMVZpkEz").then(resp=>resp.json())
		.then(data=>{
			
			return this.setState({sportsNews:data.results})
		});
		
		
	
	}

	/*Function to set state 'searchfield' in accordance with change in input in search bar*/
	onSearchChange=(event)=>{
		this.setState({searchField:event.target.value});
		}

	currentTime(){

		this.setState({time:new Date()});
	}
	/*render method */
	render(){
		let filteredNews=this.state.newsDisplayed.filter(article=>{
			return article.title.toLowerCase().includes(this.state.searchField.toLowerCase());
			});
	  let healthNews = this.state.healthNews;
	  let sportsNews = this.state.sportsNews;
		
		let timer= <Timer timeNow={this.state.time}/>;

		/*Check if the search result is empty or not 
		if(filteredNews.length!==0){
			display= <Newsdisplay articlesArrayList={filteredNews} />
			}
		else{
			display= <Empty />
			}  */
		return(
			<div>
			  <BrowserRouter >
				{/* All components to be rendered*/}
				<Nav timer={timer} />
				{/*<Searchbar searchChange={this.onSearchChange} /> 

				{display} 
			{/*Either NewsDisplay component or Empty component*/}
			  {/*}  <Searchbar searchChange={this.onSearchChange} /> 
			    <Newsdisplay articlesArrayList={cnnNews} />  */}
			     <Switch >
				    <Route path = "/" exact render = {()=> 
				    	(<div>
				    		<Searchbar searchChange={this.onSearchChange} />
				    		<Newsdisplay articlesArrayList={filteredNews} /> 
				    	</div>)} />
				    	<Route path = "/health" exact component = {(props)=><Newsdisplay {...props} articlesArrayList={healthNews} /> } /> 
				    	<Route path = "/sports" exact component = {(props)=><Newsdisplay {...props} articlesArrayList={sportsNews} /> } /> 
				   {/* <Route path = "/cnn" exact component = {(props)=><Newsdisplay {...props} articlesArrayList={cnnNews} /> } />
				    <Route path = "/bbc" exact component = {(props)=><Newsdisplay {...props} articlesArrayList={bbcNews} /> } />
			   */}
			    </Switch>
				<Footer/>
			  </BrowserRouter >
			</div>
			)
		};
		
}

export default App;
