import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import ExtNewVdrBottom from './ExtNewVdrBottom';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class ExtNewVdr extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      casetype: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onSubmit(e){
    e.preventDefault();

    const newRecord = {
      caseType: this.state.caseType
    }
    
    const caseType = newRecord.caseType;

    console.log(`This is the caseType: ${newRecord.caseType}`);
    this.props.updateCaseType(caseType);
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.onSubmit}>
        <TextField
          id="outlined-name"
          label="Case Type"
          className={classes.textField}
          value={this.state.caseType}
          onChange={this.handleChange('caseType')}
          margin="normal"
          variant="outlined"
        />
         <Button variant="contained" color="primary" className={classes.button} type="submit">
          Submit
        </Button>        
      </form>
      <ExtNewVdrBottom />
      </React.Fragment>
    );
  }
}

ExtNewVdr.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ...state,
  caseType: state.caseType
})

export default connect(mapStateToProps, actions)(withStyles(styles)(ExtNewVdr));