import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { extVdrItems } from './extVdrItems';
import ExtVdrDescriptDialog from './ExtVdrDescriptDialog';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class ExtNewVdrBottom extends React.Component {
    state = {};

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        const listItems = extVdrItems.map((item) =>
            <TextField
                key={item.id}
                id={item.name}
                label={item.label}
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange(item.name)}
                margin="normal"
                helperText={item.helperText}
            />

        )
        return (
            <React.Fragment>
                <form className={classes.container} noValidate autoComplete="off">
                    {listItems}
                </form>
                <ExtVdrDescriptDialog />
            </React.Fragment>
        );
    }
}

ExtNewVdrBottom.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExtNewVdrBottom);