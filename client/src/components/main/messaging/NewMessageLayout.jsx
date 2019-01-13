import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

const NewMessageLayout = (props) => {

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}

NewMessageLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewMessageLayout);