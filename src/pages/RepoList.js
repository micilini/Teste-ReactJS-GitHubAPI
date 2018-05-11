import ajax from 'superagent';
import React from 'react';
import { Link } from 'react-router';
import List from '../components/List';

class RepoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { repos: [] };
	}
	render() {
		return (
			<div className="height-100percent row">
				<List />
				<div className="height-100percent overflow-y-scroll repo-wrapper col-xs-12 col-sm-8 p-1"></div>
			</div>
		);
	}
}

export default RepoList;
