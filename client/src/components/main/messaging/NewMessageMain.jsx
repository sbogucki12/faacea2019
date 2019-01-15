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
			to: "john@corporate.net",
			cc: "",
			bcc: "",
			date: 'Jan. 13...',
			time: '06:30 p.m.',
			email: "user@corporate.net",
			subject: "Test Successful!",
			body: ""
		};
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
			body: this.props.body
		});

		
		fetch('http://localhost:5000/api/sendmessage', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: {
				id: this.state.id,
				to: this.state.to, 
				cc: this.state.cc, 
				bcc: this.state.bcc, 
				date: this.state.date, 
				time: this.state.time, 
				email: this.state.email, 
				subject: this.state.subject, 
				body: this.state.body
			}
		}).then((res) => alert(res));
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<NewMessageLayout>
					<Paper elevation={6}>
						<NewMessageHeader />
						<NewMessageBody />
						<NewMessageFooter							
							onHandleSubmit={this.onHandleSubmit}
						/>
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
