import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NewMessageLayout from './NewMessageLayout';
import NewMessageBody from './NewMessageBody';
import NewMessageFooter from './NewMessageFooter';
import NewMessageHeader from './NewMessageHeader';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
});

class NewMessageMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 1,
			to: '',
			cc: '',
			bcc: '',
			date: 'Jan. 15...',
			time: '10:59 p.m.',
			email: 'steve@devbogoodski.com',
			subject: '',
			body: ''			
		};
	}

	onHandleChange = (event) => {
		const target = event.target;
    	const value = target.value
		const name = target.name;
		let d = new Date();		
		const months = [ "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
		let mm = months[d.getMonth()];
		let dd = d.getDate();
		let hh = d.getHours();
		const convertHour = (hours) => {
			if(hours > 12){
				hours = hours - 12;
				return hours
			}

			return hours; 
		}
		const convertedHours = convertHour(hh);		
		let min = d.getMinutes();

		const isAm = (time) => {
			return (time > 12 ? "p.m." : "a.m.");
		}

		let amPm = isAm(hh);

		const toPrefixZero = (time) => {
			if(time < 10){
				time = `0${time}`;
				return time;
			};
			return time;
		};

		const realHours = toPrefixZero(convertedHours);
		const realDay = toPrefixZero(dd);

		const date = `${mm} ${realDay}`;
		const time = `${realHours}:${min} ${amPm}`;
		this.setState({
			[name]: value, 
			date: date, 
			time: time
		  });
	}
	onHandleSubmit = () => {
		let url; 
		const env = process.env.NODE_ENV; 
		if(env === 'development'){
			url = 'http://localhost:5000/api/sendmessage';
		} else {
			url = '/api/sendmessage';
		}
		
		const data = this.state;
		
		fetch(url, {
			method: 'POST', // or 'PUT'
			body: JSON.stringify(data), // data can be `string` or {object}!
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(response => console.log('Success:', JSON.stringify(response)))
			.catch(error => console.error('Error:', error));
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<NewMessageLayout>
					<Paper elevation={6}>
						<NewMessageHeader onHandleChange={this.onHandleChange} />
						<NewMessageBody onHandleChange={this.onHandleChange} />
						<NewMessageFooter onHandleSubmit={this.onHandleSubmit} />
						<br />
					</Paper>
				</NewMessageLayout>
			</div>
		);
	}
}

NewMessageMain.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewMessageMain);
