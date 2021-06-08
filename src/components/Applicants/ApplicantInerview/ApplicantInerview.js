import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './ApplicantInterview.css';

import { useHistory } from 'react-router-dom';

import Notification from '../../Notification';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
}));

export default function ApplicantInterview() {

    const classes = useStyles();

    let history = useHistory();
    
    const redirectTo = (link) => {
        history.push(`/${link}`);
    }

    return (
        <div>
            <div className="container applicant-interview">
                <Notification 
                    color="info" 
                    message={"تهانينا! لقد تأهلت لاختيار مدينتك الأولى الرياض (الرياض) يرجى تحديد تفضيلات المقابلة الخاصة بك"} 
                />
                <div className="applicant-interview-details">
                    <div className="container">
                        <form className="w-100">
                            <div className="form-group row">
                                <label htmlFor="interview-location" className="col-sm-2 col-form-label">موقع المقابلة</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control interview-input" id="interview-location" value={"Company for Consultancies & Solutions"} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="Google-interview" className="col-sm-2 col-form-label">مقابلة جوجل</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control interview-input" id="Google-interview" value={"Google Meeting Link"} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="interview-date" className="col-sm-2 col-form-label">اختر تاريخ و وقت المقابلة</label>
                                <div className="col-sm-10">
                                    <TextField
                                        id="datetime-local"
                                        type="datetime-local"
                                        defaultValue="2017-05-24T10:30"
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                        fullWidth
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="applicant-interview-footer">
                    <button type="button" className="btn btn-primary" onClick={()=> redirectTo("")}>حجز الموعد</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> redirectTo("")}>العودة</button>
                </div>
            </div>
        </div>
    )
}
