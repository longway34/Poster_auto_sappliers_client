import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Link} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';

//import './css/AppTitleComponent.css'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		// margin: 'auto',
		maxWidth: "100%",
		width: "100%"
	},
	image: {
		width: 64,
		height: 64,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
}));


export default function AppTitleComponent(props) {
	const { settings } = props;

	const classes = useStyles();
	// const firmUrl = useRef(settings.firmPosterUrl);

	return (
		<Paper className={classes.paper}>
			<Grid container spacing={2} alignItems="flex-start">
				<Grid item>
					<ButtonBase className={classes.image} >
						<Link href={settings.firmPosterUrl} rel="noreferrer" target="_blank" title='Для входа можно использовать Email:guest@longway34.ru, Пароль:qwerty'>
							<img src={settings.firmLogoUrl} className={classes.img} alt="Логотип конторы" />
						</Link>
					</ButtonBase>
				</Grid>
				<Grid item xs={12} sm container>
					<Grid item xs container direction="column" spacing={2}>
						<Grid item xs>
							<Typography variant="body2" component="p">
								{settings.firmType ? parseInt(settings.firmType) === 1 ? "Кафе" : "Магазин" : ""}
							</Typography>
							<Typography variant="h5" component="h2">
								{settings.firmName ? settings.firmName : ""}
							</Typography>
							<Typography variant="caption" component="p">
								{`${settings.firmAddress} (${settings.firmPhone},  ${settings.FirmEmail})`}
							</Typography>
							{/* <Typography variant="caption" component="p">
								{settings.firmPhone}
							</Typography>
							<Typography variant="body2" component="p">
								{settings.firmEmail}
							</Typography> */}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
}

