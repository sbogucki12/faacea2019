import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import UnreadIcon from '@material-ui/icons/MarkunreadTwoTone';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import MessageMain from './message/MessageMain';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	paperRoot: {
		// ...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 1,
		paddingBottom: theme.spacing.unit * 2,
	},
	icon: {
		margin: theme.spacing.unit,
	},
	fab: {
		margin: 0,
		top: 'auto',
		right: 20,
		bottom: 20,
		left: 'auto',
		position: 'fixed',
	},
	text: {},
});

// function ListItemLink(props) {
// 	return <ListItem button component="a" {...props} />;
// }

class InboxList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageData: [],
			open: false,
		};
	}

	componentWillMount() {
		let url;
		const env = process.env.NODE_ENV;
		if (env === 'development') {
			url = 'http://localhost:5000/api/getmail';
		} else {
			url = '/api/getmail';
		}

		fetch(url)
			.then(response => response.json())
			.then(data => {
				// const reversedData = data.reverse();
				
				const sortData = array => {
					for (var i = 0; i < array.length; i++) {
						const boundary = array.length - 1;
						let counter = 0;
						if (array[counter].id < array[counter + 1].id) {
							if (counter < boundary) {
								array[counter] = array[counter + 1];								
							}
						}
						counter++;						
					}
					return array;
				};
				const reversedData = sortData(data);
				this.setState({
					messageData: reversedData,
				});
			});
	}

	handleClickOpen = () => {
		this.setState({
			open: true,
		});
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Paper className={classes.paperRoot} elevation={1}>
					<List component="nav">
						{this.state.messageData.map(message => {
							return (
								<React.Fragment>
									<ListItem button onClick={this.handleClickOpen}>
										<ListItemIcon>
											<UnreadIcon className={classes.icon} />
											<ListItemText primary={message.date} secondary={message.time} />
										</ListItemIcon>
										<ListItemText
											primary={message.email}
											secondary={message.subject}
											className={classes.text}
										/>
									</ListItem>
									<Divider />
								</React.Fragment>
							);
						})}
						<Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.props.onNewMessage}>
							<AddIcon />
						</Fab>
					</List>
				</Paper>
				<Dialog onClose={this.handleClose} open={this.state.open} fullWidth maxWidth="xl">
					<MessageMain />
				</Dialog>
			</div>
		);
	}
}

InboxList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InboxList);
