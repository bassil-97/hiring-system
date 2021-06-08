import React, {useState} from 'react';
import './MainDashboard.css';

import { useHistory } from 'react-router-dom'

import { Typography, Grid } from '@material-ui/core';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ListIcon from '@material-ui/icons/List';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TodayIcon from '@material-ui/icons/Today';
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

export default function MainDashboard({ isDisabled }) {

    const classes = useStyles();
    const history = useHistory();

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
                            الاسم: أمل محمد
                        </Typography>
                        <Typography variant="subtitle1" display="block" className={classes.title}>
                            الرقم: 10103242221 
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} xl={5}>
                    <Notification 
                        color="error" 
                        message="لم تكمل طلبك حتى اللآن"
                    />
                </Grid>
            </Grid> 
            <Grid container spacing={4} className="phases mb-4">
                <div className="container phase-1">
                    <div className="row">
                        <div className="col-lg">
                            <Typography variant="subtitle1" display="block" className="phase-title">
                                المرحلة 1
                            </Typography>
                        </div>
                        <div className="col-lg module-box" onClick={()=> redirectTo("job-description")}>
                            <DescriptionOutlinedIcon fontSize="large" style={{color: 'var(--icons-color)'}} />
                            <span className="mt-2">
                                الوصف الوظيفي   
                            </span>
                        </div>
                        
                        <div className="col-lg module-box" onClick={()=> redirectTo("applicant-data")}>
                            <ContactPhoneIcon fontSize="large" style={{color: 'var(--icons-color)'}} />
                            <span className="mt-2">
                                بياناتك
                            </span>
                        </div>
                        <div className="col-lg module-box" onClick={()=> redirectTo("applicant-documents")}>
                        <DescriptionOutlinedIcon fontSize="large" style={{color: 'var(--icons-color)'}} />
                            <span className="mt-2">
                                وثائقك
                            </span>
                        </div>
                        <div className="col-lg module-box">
                            <ListIcon fontSize="large" style={{color: 'var(--icons-color)'}} />
                            <span className="mt-2">
                                الشروط والأحكام
                            </span>
                        </div>
                    </div>
                </div>
            </Grid>       
            <Grid container spacing={4} className="phases mt-4">
                <div className="container phase-1">
                    <div className="row">
                        <div className="col-lg">
                            <Typography variant="subtitle1" display="block" className="phase-title">
                                المرحلة 2, 3, 4 & 5
                            </Typography>
                        </div>
                        <div className="col-lg module-box" onClick={()=> redirectTo("applicant-region")}>
                            <LocationOnIcon fontSize="large" style={{color: 'var(--icons-color)'}} />
                            <span className="mt-2">
                                المنطقة
                            </span>
                        </div>
                        
                        <div className="col-lg module-box" onClick={()=> redirectTo("applicant-city")}>
                            <LocationCityIcon fontSize="large" style={{color: 'var(--icons-color)'}} />
                            <span className="mt-2">
                                المدينة
                            </span>
                        </div>
                        <div className="col-lg module-box" onClick={()=> redirectTo("applicant-interview")}>
                            <TodayIcon fontSize="large" style={{color: 'var(--icons-color)'}} />
                            <span className="mt-2">
                                حجز موعد المقابلة
                            </span>
                        </div>
                        <div className="col-lg module-box" onClick={()=> redirectTo("applicant-school")}>
                            <MenuBookIcon fontSize="large" style={{color: 'var(--icons-color)'}} />
                            <span className="mt-2">
                                المدرسة
                            </span>
                        </div>
                    </div>
                </div>
            </Grid>       
            <Grid container>
                <div className="container application-status">
                    <div className="row text-center">
                        <h4 className="w-100 mb-0">اكملي الطلب</h4>
                    </div>
                </div>
            </Grid>
        </div>
    )
}
