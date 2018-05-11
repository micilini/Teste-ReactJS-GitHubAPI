import ajax from 'superagent';
import React from 'react';
import { Link } from 'react-router';
import Detail from '../components/Detail';
import List from '../components/List';

class RepoInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { repo: [], commits: [], commitsPage: 1 };
	}
	render() {
		return (
			<div className="height-100percent row">
				<List />
				<Detail repo={this.props.params.repo} />
			</div>
		);
	}
}

export default RepoInfo;
