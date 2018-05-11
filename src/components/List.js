import ajax from 'superagent';
import React from 'react';
import { Link } from 'react-router';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { repos: [] };
	}
	componentWillMount() {
		ajax.get('https://api.github.com/orgs/globocom/repos')
			.end((error, response) => {
				if (!error && response) {
					response.body.sort(function (a, b) {
						if (a.stargazers_count < b.stargazers_count) return 1;
						if (a.stargazers_count > b.stargazers_count) return -1;
						return 0;
					});
					this.setState({ repos: response.body });
				} else {
					console.error('There was an error fetching from GitHub', error);
				}
			}
		);
	}
	forceUpdate(){
		location.reload();
	}
	render() {
		return (
			<div className="height-100percent repos-wrapper col-xs-12 col-sm-4 bg-primary p-1 text-white text-sm-right">
				<h1 className="repo-title">Repositorio da <strong>Globo.com</strong></h1>
				<ul className="list-unstyled">
					{this.state.repos.map((repo, index) => (
						<li className="mb-1" key={index}>
							<Link onClick={this.forceUpdate} to={"/" + repo.name} className="text-white">
								<h2 className="h6 mb-0 project-name">
									<i className="fa fa-arrow-right"></i>&nbsp;
									{repo.name}
								</h2>
							</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default List;
