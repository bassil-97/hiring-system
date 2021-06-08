import React from 'react';
import './ApplicantSchool.css';

import { useHistory } from 'react-router-dom';

import Notification from '../../Notification';
import SaudiRegions from './SaudiRegions';

export default function ApplicantSchool() {

    let history = useHistory();
    
    const redirectTo = (link) => {
        history.push(`/${link}`);
    }

    return (
        <div>
            <div className="container applicant-school">
                <Notification 
                    color="info" 
                    message={"تهانينا! لقد تأهلت لاختيار مدينتك الأولى الرياض (الرياض) الرجاء تحديد تفضيلات المدرسة العليا الخاصة بك"} 
                />
                <div className="applicant-school-details">
                    <div className="container">
                        <form className="w-100">
                            <div className="form-group row">
                                <label htmlFor="basic-salary" className="col-sm-2 col-form-label">الخيار الأول</label>
                                <div className="col-sm-10">
                                    <SaudiRegions />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="basic-salary" className="col-sm-2 col-form-label">الخيار الثاني</label>
                                <div className="col-sm-10">
                                    <SaudiRegions />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="basic-salary" className="col-sm-2 col-form-label">الخيار الثالث</label>
                                <div className="col-sm-10">
                                    <SaudiRegions />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="basic-salary" className="col-sm-2 col-form-label">الخيار الرابع</label>
                                <div className="col-sm-10">
                                    <SaudiRegions />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="basic-salary" className="col-sm-2 col-form-label">الخيار الخامس</label>
                                <div className="col-sm-10">
                                    <SaudiRegions />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="basic-salary" className="col-sm-2 col-form-label">الخيار السادس</label>
                                <div className="col-sm-10">
                                    <SaudiRegions />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="basic-salary" className="col-sm-2 col-form-label">الخيار السابع</label>
                                <div className="col-sm-10">
                                    <SaudiRegions />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="basic-salary" className="col-sm-2 col-form-label">الخيار الثامن</label>
                                <div className="col-sm-10">
                                    <SaudiRegions />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="basic-salary" className="col-sm-2 col-form-label">الخيار التاسع</label>
                                <div className="col-sm-10">
                                    <SaudiRegions />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="basic-salary" className="col-sm-2 col-form-label">الخيار العاشر</label>
                                <div className="col-sm-10">
                                    <SaudiRegions />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="applicant-school-footer">
                    <button type="button" className="btn btn-primary" onClick={()=> redirectTo("")}>إرسال</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> redirectTo("")}>العودة</button>
                </div>
            </div>
        </div>
    )
}
