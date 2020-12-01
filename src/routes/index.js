import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import PropTypes from "prop-types";
import { withStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import StoragesListContainer from "../containers/StoragesListContainer";
import AboutPageContainer from '../containers/AboutPageContainer';

import ShablonsListContainer from "../containers/ShablonsListContainer";
import StorageOrdersContainer from '../containers/StorageOrdersContainer';
import ShablonOrdersContainer from '../containers/ShablonOrdersContainer';
import Appbar from '../components/Appbar';

import StorageIngredientsPageContainer from '../containers/StorageIngredientsPageContainer';
import ShablonIngredientsPageContainer from '../containers/ShablonIngredientsPageContainer';
import SupplierPropertyListContainer from '../containers/SupplierPropertyListContainer';

const rootPrefix = require('../store/constants').rootPrefix;

const drawerWidth = 330;

const theme = createMuiTheme({
	overrides: {
		// Style sheet name ⚛️
		MuiListItem: {
			// Name of the rule
			button: {
				paddingLeft: 6,
				paddingRight: 6
			},
		},
		MuiCardHeader:{
			root:{
				padding: 6
			}
		},
		MuiTypography:{
			h5: {
				fontSize: "0.875rem"
			},
			body1:{
				fontSize: "0.7rem"
			}
		}
	},
});

const styles = theme => ({
	MuiListItem:{
		button:{
			padding: 6,
		}
	},
	root: {
		flexGrow: 1,
		zIndex: 1,
		overflow: "hidden",
		position: "relative",
		display: "flex"
	},
	drawerPaper: {
		position: "relative",
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		// padding: theme.spacing.unit * 3,
		padding: theme.spacing.unit,
		minWidth: 0 // So the Typography noWrap works
	},
	toolbar: theme.mixins.toolbar
});

const history = createBrowserHistory();

const Routes = props => {
	const { classes } = props;

	return (
		<div>
			<Router history={history} >
				<Appbar />
				<div className={classes.root}>
					<Drawer
						variant="permanent"
						classes={{
							paper: classes.drawerPaper
						}}
					>
						<ThemeProvider theme={theme}>
						<List>
							<ListItem button component={Link} to={`${rootPrefix}/suppliersProperty`}>
								<ListItemIcon>
									<InboxIcon color="primary" />
								</ListItemIcon>
								<Typography variant="h6">Поставщики</Typography>
							</ListItem>
							<ListItem button component={Link} to={`${rootPrefix}`}>
								<ListItemIcon>
									<InboxIcon color="primary"/>
								</ListItemIcon>
									<StoragesListContainer />
							</ListItem>
							<ListItem button >
								<ShablonsListContainer />
							</ListItem>
						</List>
						</ThemeProvider>
					</Drawer>
					<main className={classes.content}>
						<Route exact path="/shablonIngredients" component={ShablonIngredientsPageContainer} />  
						<Route exact path="/storageIngredients" component={StorageIngredientsPageContainer} />  
						<Route exact path="/storageOrders" component={StorageOrdersContainer} />  
						<Route exact path="/shablonOrders" component={ShablonOrdersContainer} />  
						<Route exact path={`${rootPrefix}/suppliersProperty`} component={SupplierPropertyListContainer} />  
						<Route exact path={`${rootPrefix}/about`} component={AboutPageContainer} />
						<Route exact path={`${rootPrefix}`} component={AboutPageContainer} />
					</main>
				</div>
			</Router>
		</div>
	);
};

Routes.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Routes);
