import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Notification from '../Notification';

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

export default function LoggedUser() {

    const classes = useStyles();

    return (
        <Grid container spacing={4} className="main-dashboard-header">
            <Grid item xs={12} sm={3}>
                <div className="d-flex flex-column text-right">
                    <Typography variant="overline" display="block" className={classes.title}>
                        تسجيل الدخول بواسطة
                    </Typography>
                    <Typography variant="subtitle1" display="block" className={classes.title}>
                        الاسم: محمد احمد
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} xl={5}>
                <Notification 
                    color="error" 
                    message={"لم يقم بعض المتقدمين بتحميل مستنداتهم حتى الآن"}
                />
            </Grid>
        </Grid> 
    )
}
