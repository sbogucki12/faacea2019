import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

const InboxLayout = (props) => {

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}

InboxLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InboxLayout);