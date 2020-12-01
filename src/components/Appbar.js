import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AppTitleContainer from '../containers/AppTitleContainer'
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function ButtonAppBar(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static" color="inherit">
				<Toolbar>
					<AppTitleContainer className={classes.menuButton} />
				</Toolbar>
				<Toolbar>
					<ButtonGroup size="small" aria-label="small outlined primary button group">
						<Button color="primary" component={RouterLink} to="/poster/about">О проекте</Button>
						<Button color="primary" href='https://github.com/longway34/Poster_auto_suppliers_server' target="_blank" rel='noreferrer'>Исходники (сервер)</Button>
						<Button color="primary" href='https://github.com/longway34/Poster_auto_suppliers_client' target="_blank" rel='noreferrer'>Исходники (клиент)</Button>
						<Button disabled={true}>login</Button>
					</ButtonGroup>
				</Toolbar>
			</AppBar>
		</div>
	);
}

ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

