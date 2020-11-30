import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

class StoragesListComponent extends Component {
	constructor(props) {
		super(props);
		
		this.classes = makeStyles(() => ({
			formControl: {
				minWidth: 120,
			},
			selectEmpty: {
			},
		}));

		this.state = {
			current: this.props.storages && this.props.storages.current ? this.props.storages.current : -1
		}

		this.onSelect = this.onSelect.bind(this);
	}
	
	onSelect(e){
		const value = e.target.value;
		this.setState({current: value});
		if(this.props.onSelect){
			this.props.onSelect(value)
		}
	}

	getOptions(current){
		let ret = [(<option disabled={true} value={-1}>Выберите склад</option>)];
		if(this.props.storages && this.props.storages.rows){
			const keys = Object.keys(this.props.storages.rows);
			for(let k in keys){
				const storage = this.props.storages.rows[keys[k]];
				ret.push(<option value={storage.id} selected={storage.id === current}>{storage.name}</option>)
			}
		}
		return ret;
	}

	render() {
		return (
			<FormControl required className={this.classes.formControl}>
				<InputLabel htmlFor="age-native-required">Склады</InputLabel>
				<Select
					native
					value={this.state.current}
					onChange={this.onSelect}
					name="Склады"
					inputProps={{
						id: 'storages-native-required',
					}}
				>
					{this.getOptions(this.state.current)}
				</Select>
				{this.state.current === -1 ? <FormHelperText>Обязательно</FormHelperText> : ""}
			</FormControl>
		);
	}
}

export default StoragesListComponent;
