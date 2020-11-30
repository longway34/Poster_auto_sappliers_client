import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actions } from '../actions';
import { proxyHost } from '../store/constants'

const axios = require('axios');

class StartUpComponent extends Component {
	componentDidMount() {
		this.props.onStart();
	}
	render() {
		return this.props.isLoading
			? (<p>Loading...</p>) : 
				this.props.isLoadedSuccess ?
				this.props.children
	: (<p>Loading: {this.props.err?this.props.err.message: ""}</p>);
	}

}

const initialiseConnection = (dispatch) => {
	let url = `${proxyHost}/settings`;
	dispatch(actions.ui.request());
	dispatch(actions.settings.request());
	axios.get(url)
		.then((response) => {
			dispatch(actions.settings.response(response.data.firmInfo));
			dispatch(actions.storages.response(response.data.storages));
			dispatch(actions.suppliers.response(response.data.suppliers));
			dispatch(actions.ui.response())
		})
		.catch((err) => {
			dispatch(actions.suppliers.error(err))
			dispatch(actions.ui.error(err))
			console.log(err);
		});

}

function mapStateToProps(state) {
	return {
		isLoadind: state.ui.isFetching,
		isLoadedSuccess: state.ui.isStartUpComplite,
		err: state.ui.err
	};
}
function mapDispatchToProps(dispatch) {
	return {
		onStart: ()=>{initialiseConnection(dispatch)},
	};
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StartUpComponent);
