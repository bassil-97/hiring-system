import React from 'react';
import './ApplicantData.css';

import Notification from '../../Notification';
import DaysList from './daysList';
import MonthsList from './MonthsList';
import YearList from './YearsList';

import { useHistory } from 'react-router-dom';

export default function ApplicantData() {

    let history = useHistory();
    
    const redirectTo = (link) => {
        history.push(`/${link}`);
    }

    return (
        <div>
            <div className="container applicant-data">
                <Notification 
                    color="info" 
                    message={"من فضلك قم بتعبئة بياناتك"} 
                />
                <div className="applicant-data-details">
                    <div className="container">
                        <form className="w-100">
                            <div className="form-group row">
                                <label htmlFor="basic-salary" className="col-sm-2 col-form-label">الاسم الكامل</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="full-name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="national-id" className="col-sm-2 col-form-label">الرقم الوطني</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="national-id" />
                                </div>
                            </div>
                            <div className="form-group row mb-0">
                                <label htmlFor="date-of-birth" className="col-sm-2 col-form-label ml-3">تاريخ الميلاد</label>
                                <div class="form-row select-dof">
                                    <div class="form-group col-md-4">
                                        <DaysList />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <MonthsList />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <YearList />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="mobile-number" className="col-sm-2 col-form-label">رقم الجوال</label>
                                <div className="col-sm-10">
                                    <input type="tel" className="form-control" id="mobile-number" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="email-address" className="col-sm-2 col-form-label">البريد الإلكتروني</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="email-address" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="city" className="col-sm-2 col-form-label">المدينة</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="city" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="applicant-data-footer">
                    <button type="button" className="btn btn-primary" onClick={()=> redirectTo("")}>حفظ المعلومات</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> redirectTo("")}>العودة</button>
                </div>
            </div>
        </div>
    )
}
