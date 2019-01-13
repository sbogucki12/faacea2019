import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InboxLayout from './InboxLayout';
import InboxList from './InboxList';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	}
});

class InboxMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<InboxLayout>
					<Paper elevation={6}>
						<InboxList />
						<br />
					</Paper>
				</InboxLayout>
			</div>
		);
	}
}

InboxMain.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InboxMain);
