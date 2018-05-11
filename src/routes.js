import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import RepoList from './pages/RepoList';
import RepoInfo from './pages/RepoInfo';

const routes = (
	<Route path="/" component={ App }>
		<IndexRoute component={ RepoList } />
		<Route path=":repo" component={ RepoInfo } />
	</Route>
);

export default routes;
