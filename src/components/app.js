import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Youtube from '../api/Youtube';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount(){
		this.onTermSubmit('react js');
	}

	onTermSubmit = async (term) => {
		const response = await Youtube.get('/search', {
			params:{
				q: term
			}
		});

		this.setState({ 
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render(){
		return (
			<div className="ui container">
				<SearchBar onSearchSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="ten wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="six wide column">
							<VideoList onVideoListSelect={this.onVideoSelect} videos={this.state.videos} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;