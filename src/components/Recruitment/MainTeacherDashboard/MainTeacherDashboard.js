import React from 'react';
import './MainTeacherDashboard.css';

import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import GroupIcon from '@material-ui/icons/Group';
import StorageIcon from '@material-ui/icons/Storage';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';

import Notification from '../../Notification';

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

export default function MainTeacherDashboard() {

    const classes = useStyles();

    return (
        <div>
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
                <Grid item xs={12} sm={7}>
                    <Notification 
                        color="error" 
                        message={"لم يقم بعض المتقدمين بتحميل مستنداتهم حتى الآن"}
                    />
                </Grid>
            </Grid> 
            <Grid container spacing={2}>
                <div className="w-75 container d-flex align-items-center justify-content-center flex-column">
                    <div className="row w-100">
                        <div className="col-lg module-box">
                            <GroupIcon />
                            <h6>إدارة المستخدمين</h6>
                        </div>
                        <div className="col-lg module-box">
                            <StorageIcon />
                            <h6>إدارة التخزين</h6>
                        </div>
                        <div className="col-lg module-box">
                            <NotificationsActiveIcon />
                            <h6>إدارة الإشعارات</h6>
                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col-lg module-box">
                            <MailOutlineIcon />
                            <h6>إعدادات البريد</h6>
                        </div>
                        <div className="col-lg module-box">
                            <MessageOutlinedIcon />
                            <h6>إدارة الرسائل</h6>
                        </div>
                        <div className="col-lg module-box">
                            <AssessmentOutlinedIcon />
                            <h6>التقارير</h6>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    )
}
