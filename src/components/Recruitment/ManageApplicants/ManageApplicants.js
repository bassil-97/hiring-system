import React from 'react';
import './ManageApplicants.css';

import { useHistory } from 'react-router-dom';

export default function ManageApplicants() {

    let history = useHistory();
    
    const redirectTo = (link) => {
        history.push(`/${link}`);
    }

    return (
        <div>
            <div className="container">
            <form>
                <div className="row">
                    <div className="col">
                        <select id="filter-1" className="form-control">
                            <option selected>المرشح 1</option>
                            <option>المرشح 2</option>
                            <option>المرشح 3</option>
                            <option>المرشح 4</option>
                        </select>
                    </div>
                    <div className="col">
                        <select id="filter-2" className="form-control">
                            <option >المرشح 1</option>
                            <option selected>المرشح 2</option>
                            <option>المرشح 3</option>
                            <option>المرشح 4</option>
                        </select>
                    </div>
                    <div className="col">
                        <select id="filter-3" className="form-control">
                            <option >المرشح 1</option>
                            <option>المرشح 2</option>
                            <option selected>المرشح 3</option>
                            <option>المرشح 4</option>
                        </select>
                    </div>
                    <div className="col">
                        <select id="filter-4" className="form-control">
                            <option>المرشح 1</option>
                            <option>المرشح 2</option>
                            <option>المرشح 3</option>
                            <option selected>المرشح 4</option>
                        </select>
                    </div>
                    <div className="col">
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="بحث..." />
                    </div>
                    </div>
                </div>
            </form>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered applicants-table">
                    <thead>
                        <tr>
                            <th scope="col">الاسم</th>
                            <th scope="col">الرقم الوطني</th>
                            <th scope="col">رقم الجوال</th>
                            <th scope="col">البريد الإلكتروني</th>
                            <th scope="col">العمر</th>
                            <th scope="col">قياس</th>
                            <th scope="col">المعدل التراكمي</th>
                            <th scope="col">موعد المقابلة</th>
                            <th scope="col">طلب فعال</th>
                            <th scope="col">تخطى المقابلة</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Amal Mohammed</th>
                            <td>10103242221</td>
                            <td>0512345123</td>
                            <td>amal@domain.com</td>
                            <td>27.45</td>
                            <td>85</td>
                            <td>4.8/5</td>
                            <td>June 7, 2021 1:26 PM</td>
                            <td>
                                <div className="table-btns">
                                    <button className="btn btn-success ml-2">نعم</button>
                                    <button className="btn btn-danger">لا</button>
                                </div>
                            </td>
                            <td>
                                <div className="table-btns">
                                    <button className="btn btn-success ml-2">نعم</button>
                                    <button className="btn btn-danger">لا</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row">Maram Saeed</th>
                            <td>10203022112</td>
                            <td>0543214321</td>
                            <td>maram@domain.com</td>
                            <td>25.88</td>
                            <td>90</td>
                            <td>4.7/5</td>
                            <td>June 7, 2021 1:26 PM</td>
                            <td>
                                <div className="table-btns">
                                    <button className="btn btn-success ml-2">نعم</button>
                                    <button className="btn btn-danger">لا</button>
                                </div>
                            </td>
                            <td>
                                <div className="table-btns">
                                    <button className="btn btn-success">نعم</button>
                                    <button className="btn btn-danger">لا</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-footer-wrapper">
                <button type="button" className="btn btn-primary">تصدير لملف Excel</button>
                <div className="table-pagination">
                    <span className="w-100" onClick={()=> redirectTo("contract-onboarding")}>Page 2/15</span>
                    <select id="table-pagination-select" className="form-control">
                        <option selected>أظهر 1000/صفحة</option>
                        <option>أظهر 2000/صفحة</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
