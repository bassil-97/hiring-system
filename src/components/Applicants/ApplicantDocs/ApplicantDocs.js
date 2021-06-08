import React from 'react';
import './ApplicantDocs.css';

import { useHistory } from 'react-router-dom';

import Notification from '../../Notification';

export default function ApplicantDocs() {

    let history = useHistory();

    const redirectTo = (link) => {
        history.push(`/${link}`);
    }

    return (
        <div>
            <div className="container applicant-docs">
                <Notification 
                    color="info" 
                    message={"من فضلك قم بتحميل جميع الوثائق المطلوبة"} 
                />
                <div className="applicant-docs-details">
                    <div className="container">
                        <form className="w-100">
                            <div className="form-group row">
                                <label htmlFor="id-card" className="col-sm-2 col-form-label">بطاقة الأحوال الشحصية</label>
                                <div className="col-sm-10">
                                    <div class="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                        <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="family-card" className="col-sm-2 col-form-label">بطاقة العائلة</label>
                                <div className="col-sm-10">
                                    <div class="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                        <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="Degree-Certificate" className="col-sm-2 col-form-label">الدرجة العلمية</label>
                                <div className="col-sm-10">
                                    <div class="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                        <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="transcript" className="col-sm-2 col-form-label">نسخة طبق الأصل</label>
                                <div className="col-sm-10">
                                    <div class="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                        <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="Qiyas-Score" className="col-sm-2 col-form-label">نتيجة قياس</label>
                                <div className="col-sm-10">
                                    <div class="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                        <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="medical-report" className="col-sm-2 col-form-label">تقرير طبي</label>
                                <div className="col-sm-10">
                                    <div class="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                        <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="applicant-docs-footer">
                    <button type="button" className="btn btn-primary" onClick={()=> redirectTo("")}>حفظ الوثائق</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> redirectTo("")}>العودة</button>
                </div>
            </div>
        </div>
    )
}
