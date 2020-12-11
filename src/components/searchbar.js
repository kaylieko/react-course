import React from 'react';

class SearchBar extends React.Component {	
	state = { term: '' };

	onInputChange = (e) =>{
		this.setState({term: e.target.value});
	};

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.onSearchSubmit(this.state.term);
	};

	render(){
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="ui fluid action input">
					  	<input 
					  		type="text" 
					  		value={this.state.term} 
					  		onChange={this.onInputChange}
					  	/>
					  	<button className="ui button">Video Search</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;