import ajax from 'superagent';
import React from 'react';
import { Link } from 'react-router';

class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = { repo: [], commits: [], commitsPage: 1 };
	}
	componentWillMount() {
		ajax.get('https://api.github.com/repos/globocom/' + this.props.repo)
			.end((error, response) => {
				if (!error && response) {
					this.setState({ repo: response.body });
				} else {
					console.error('Ocorreu um erro ao consultar a API do GitHub', error);
				}
			}
		);
		ajax.get('https://api.github.com/repos/globocom/' + this.props.repo + '/commits?per_page=20&page=1')
			.end((error, response) => {
				if (!error && response) {
					this.setState({ commits: response.body });
				} else {
					console.error('Ocorreu um erro ao consultar a API do GitHub', error);
				}
			}
		);
	}
	loadMoreCommits() {
		const commitsPage = this.state.commitsPage + 1;
		ajax.get('https://api.github.com/repos/globocom/' + this.props.repo + '/commits?per_page=20&page=' + commitsPage)
			.end((error, response) => {
				if (!error && response) {
					let commits = this.state.commits;
					Array.prototype.push.apply(commits, response.body);
					this.setState({ commits: commits });
					this.setState({ commitsPage: commitsPage });
					if (!response.links.last) {
						console.log('Sem mais Commits => Esconde o Botão');
						const btnLoadMoreCommits = document.getElementsByClassName('js-load-more-commits')[0];
						btnLoadMoreCommits.style.display='none';
						
						const btnDiv = document.getElementsByClassName('btnDiv')[0];
						btnDiv.innerHTML='<i class="fa fa-exclamation-triangle"></i>&nbsp;<span class="no-more-commits">Não existem mais Commits...</span>';
						
					}
				} else {
					console.error('Ocorreu um erro ao consultar a API do GitHub', error);
				}
			}
		);
	}
	render() {
		return (
			<div className="height-100percent overflow-y-scroll repo-wrapper col-xs-12 col-sm-8 p-1">
				<h1><i className="fa fa-book"></i>&nbsp;{this.state.repo.name}</h1>
				<p><strong>Descrição:</strong> {this.state.repo.description}</p>
				<p>
					<button type="button" class="btn btn-light"><span className="d-inline-block mr-1">
						{this.state.repo.stargazers_count}&nbsp;
						<i className="fa fa-star"></i>
					</span></button>&nbsp;&nbsp;
					<button type="button" class="btn btn-secondary"><span className="d-inline-block mr-1">
						{this.state.repo.forks}&nbsp;
						<i className="fa fa-code-fork"></i>
					</span></button>
				</p>
				<hr />
				<h2><i className="fa fa-plus-circle"></i> Commits</h2>
				<hr />
				<ul className="list-unstyled">
					{this.state.commits.map((commit, index) => {
						const author = commit.author ? commit.author.login : 'Anonymous';
						const date = commit.commit ? commit.commit.author.date.split('T')[0] : '??';
						const time = commit.commit ? commit.commit.author.date.split('T')[1].split('Z')[0] : '??';
						return (
							<li className="mb-1" key={index}>
								{commit.commit ? commit.commit.message : '??'}<br />
								<img src={commit.author ? commit.author.avatar_url : ''} alt={author} height="20" width="20" />&nbsp;
								<strong>{author}</strong>,&nbsp;
								<small>em {date} às {time}</small>
								<hr />
							</li>
						);
					})}
				</ul>
				<div className="text-xs-center btnDiv">
					<button className="btn btn-primary js-load-more-commits" onClick={this.loadMoreCommits.bind(this)}>Carregar mais Commits</button>
				</div>
				<br />
			</div>
		);
	}
}

export default Detail;
