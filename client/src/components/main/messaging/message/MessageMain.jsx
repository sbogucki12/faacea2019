import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MessageLayout from './MessageLayout';
import MessageSubject from './MessageSubject';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';
import MessageInfoBar from './MessageInfoBar';
// import Fab from '@material-ui/core/Fab';
// import Reply from '@material-ui/icons/ReplyTwoTone';
// TO DO: Make Index File

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
	icon: {
		margin: theme.spacing.unit,
	},
	// fab: {
	// 	margin: 0,
	// 	top: 'auto',
	// 	right: 20,
	// 	bottom: 20,
	// 	left: 'auto',
	// 	position: 'fixed',
	// },
});

class MessageMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<MessageLayout>
					<MessageSubject />
					<MessageInfoBar />
					<MessageBody />
					<MessageFooter />
					{/* <Fab color="primary" aria-label="Add" className={classes.fab}>
						<Reply />
					</Fab> */}
				</MessageLayout>
			</div>
		);
	}
}

MessageMain.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageMain);
