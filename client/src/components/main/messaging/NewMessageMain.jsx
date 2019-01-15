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
			date: 'Jan. 13...',
			time: '06:30 p.m.',
			email: '',
			subject: '',
			body: '',
		};
	}

	onHandleChange = (event) => {
		const target = event.target;
    	const value = target.value
		const name = target.name;
		
		this.setState({
			[name]: value
		  });
	}
	onHandleSubmit = () => {
		this.setState({
			id: this.props.id,
			to: this.props.to,
			cc: this.props.cc,
			bcc: this.props.bcc,
			date: this.props.date,
			time: this.props.time,
			email: this.props.email,
			subject: this.props.subject,
			body: this.props.body,
		});

		const url = 'http://localhost:5000/api/sendmessage';
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
						<NewMessageBody subject={this.state.subject} body={this.state.body} onHandleChange={this.onHandleChange} />
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
