import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    fontFamily: 'Tajawal',
    marginRight: '4px',
  }
}));

export default function SimpleAlerts({ color, message }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={color}>
        <h6 className={classes.title}>{message}</h6>
      </Alert>
    </div>
  );
}
