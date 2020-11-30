import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		padding: 0
	},
	formControl: {
		marginLeft: 8,
	},
	red: {
		color: red[600],
		fontWeight: "bold"
	},
	bold: {
		fontWeight: "bold"
	},
	smallFont:{
		fontSize: "10px"
	}
}));

const theme = createMuiTheme({
	overrides: {
		MuiTypography: {
			body1: {
				fontSize: 12
			},
		},
		PrivateSwitchBase: {
			root:{
				padding: 0
			}
		},
		MuiFormControlLabel:{
			root:{
				marginRight: 10
			}
		}
	},
});


const defaultDays = {days: [1, 3, 5]};

export default function ShedulerMonthPropertyComponent(props=defaultDays){
	const classes = useStyles();

	let st = [];
	if(props.days && Array.isArray(props.days)){
		st = props.days;
	}
	const [state, setState] = React.useState({
		days: st,
		everyDay: false,
	});

	const outDays = (state) =>{
		let ret = [];
		for(let i=0; i<31; i++){
			let val = state.days.indexOf(i) >=0;
			if(val){
				ret.push(i);
			}
		}
		return ret;
	}

	const handleChange = (event) => {
		let newState = Object.assign({}, state);
		newState.days = state.days.slice();
		let index_ = event.target.name.substr(1);
		let index = parseInt(index_);
		let ind = newState.days.indexOf(index);
		let value = event.target.checked;
		if(value){
			if(ind < 0 ){
				newState.days.push(index);
			}
		} else {
			if(ind >= 0){
				newState.days.splice(ind, 1);
			}
		}

		if(!event.target.checked){
			newState.everyDay = false;
		}
		setState(newState);
		if(props.onChange){
			props.onChange(outDays(newState));
		}
	};

	const handleChangeEveryDays = (event) => {
		let newState = Object.assign({}, state);
		newState.days = state.days.slice()
		newState.everyDay = event.target.checked;
		if (newState.everyDay) {
			newState.days = [];
			for(let i=0; i<31; i++){
				newState.days.push(i);
			}
		}
		setState(newState);
		if (props.onChange) {
			props.onChange(outDays(newState));
		}
	};

	const getName = (index) =>{
		return `_${index}`;
	}

	const isChecked = (index) =>{
		return state.days.indexOf(parseInt(index)) >= 0;
	}

	const getLabels = ()=>{
		let ret = []; let count = 0;
		for(let i=0; i<5; i++){
			let line = [];
			for(let j=0; j<7 && count<31; j++){
				line.push(
					<FormControlLabel className={{body1: classes.smallFont}}
						control={<Checkbox checked={isChecked(count)}  onChange={handleChange} name={getName(count)} color='primary'/>}
						label={`${count + 1}${count<9 ? ".." : ""}`}
					/>
				)
				if(count === 30){
					line.push(
						<FormControlLabel 
							control={<Checkbox checked={state.everyDay} onChange={handleChangeEveryDays} name="everyDay" />}
							label="Каждый день"
						/>
					)
				}
				count++;
			}
			ret.push(
				<FormGroup row>{line}</FormGroup>
			)
		}
		return (
			<div className={classes.root}>
				<ThemeProvider theme={theme}>
					<FormControl component="fieldset" className={classes.formControl}>
						{ret}
					</FormControl>
				</ThemeProvider>
			</div>
		)
	}

	return getLabels();
};

