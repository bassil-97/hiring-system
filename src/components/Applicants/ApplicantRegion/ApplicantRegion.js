import React from 'react';
import './ApplicantRegion.css';

import Notification from '../../Notification';
import SaudiRegions from './SaudiRegions';

import { useHistory } from 'react-router-dom';

export default function ApplicantRegion() {

    let history = useHistory();
    
    const redirectTo = (link) => {
        history.push(`/${link}`);
    }

    return (
        <div>
            <div className="container applicant-region">
                <Notification 
                    color="info" 
                    message={"تهانينا! لقد تأهلت لإدارة خيارك الأول الرياض. الرجاء تحديد تفضيلات المدينة الخاصة بك"} 
                />
                <div className="applicant-region-details">
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
                <div className="applicant-region-footer">
                    <button type="button" className="btn btn-primary" onClick={()=> redirectTo("")}>إرسال</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> redirectTo("")}>العودة</button>
                </div>
            </div>
        </div>
    )
}
