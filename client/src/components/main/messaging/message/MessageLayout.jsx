import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

const MessageLayout = (props) => {

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}

MessageLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageLayout);

