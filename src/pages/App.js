import React from 'react';

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../css/_base.css'


class App extends React.Component {
	render() {
		return (
			<div className="container-fluid height-100percent">
				{this.props.children}
			</div>
		);
	}
}

export default App;
