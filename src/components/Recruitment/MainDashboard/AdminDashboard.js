import React from 'react';
import './AdminDashboard.css';

import { useHistory } from 'react-router-dom';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export default function AdminDashboard() {

    const classes = useStyles();

    let history = useHistory();
    
    const redirectTo = (link) => {
        history.push(`/${link}`);
    }

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
                <Grid item xs={12} sm={6} xl={5}>
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
                            <span>23736</span>
                            <h6>مجموع المسجلين</h6>
                        </div>
                        <div className="col-lg module-box">
                            <span>2119</span>
                            <h6>مجموع المؤهلين</h6>
                        </div>
                        <div className="col-lg module-box">
                            <span>1613</span>
                            <h6>المقابلات المحجوزة</h6>
                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col-lg module-box">
                            <span>1540</span>
                            <h6>العقود الموقعة</h6>
                        </div>
                        <div className="col-lg module-box">
                            <span>53</span>
                            <h6>مجموع المتأهلين</h6>
                        </div>
                        <div className="col-lg module-box">
                            <span>0</span>
                            <h6>المنضمين</h6>
                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col-lg module-box box-btn" onClick={()=> redirectTo("manage-applicants")}>
                            <h6 className="mb-0">إدارة جميع المتقدمين</h6>
                        </div>
                        <div className="col-lg module-box box-btn" onClick={()=> redirectTo("qualification-stages")}>
                            <h6 className="mb-0">مراحل التأهيل</h6>
                        </div>
                        <div className="col-lg module-box box-btn" onClick={()=> redirectTo("system-management")}>
                            <h6 className="mb-0">إدارة النظام</h6>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    )
}
