import React from 'react';
import './JobOffer.css';

import { useHistory } from 'react-router-dom';

import Notification from '../../Notification';

export default function JobOffer() {

    let history = useHistory();
    
    const redirectTo = (link) => {
        history.push(`/${link}`);
    }

    return (
        <div>
            <div className="container job-offer">
                <Notification 
                    color="info" 
                    message={"من فضلك راجع عرض العمل والمسؤوليات"} 
                />
                <div className="job-offer-details">
                    <div className="container">
                        <form className="w-100">
                            <div className="form-group row">
                                <label htmlFor="basic-salary" className="col-sm-2 col-form-label">الراتب الأساسي</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="basic-salary" value={10000} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="housing" className="col-sm-2 col-form-label">بدل سكن</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="housing" value={2500} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="Transportation" className="col-sm-2 col-form-label">بدل مواصلات</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="Transportation" value={1000} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="total-salary" className="col-sm-2 col-form-label">الراتب الكلي</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="total-salary" value={13500} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="GOSI" className="col-sm-2 col-form-label">GOSU</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="GOSI" value={1500} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="net-salary" className="col-sm-2 col-form-label">الراتب الصافي</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="net-salary" value={12000} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="medical-insurance" className="col-sm-2 col-form-label">تأمين طبي</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="medical-insuranc" value={"حسب سياسة الشركة"} readOnly />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="job-offer-footer">
                    <button type="button" className="btn btn-primary" onClick={()=> redirectTo("")}>قبول</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> history.goBack()}>رفض</button>
                </div>
            </div>
        </div>
    )
}
