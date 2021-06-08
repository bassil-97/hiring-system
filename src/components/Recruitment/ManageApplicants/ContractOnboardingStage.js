import React from 'react';
import './ManageApplicants.css';

export default function ManageApplicants() {
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
                            <th scope="col">الطلب النهائي</th>
                            <th scope="col">حالة العقد</th>
                            <th scope="col">تاريخ الالتحاق</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">أمل محمد</th>
                            <td>10103242221</td>
                            <td>0512345123</td>
                            <td>amal@domain.com</td>
                            <td>27.45</td>
                            <td>85</td>
                            <td>4.8/5</td>
                            <td>نعم</td>
                            <td></td>
                            <td>01/09/2021</td>
                        </tr>
                        <tr>
                        <th scope="row">مرام سعيد</th>
                            <td>10203022112</td>
                            <td>0543214321</td>
                            <td>maram@domain.com</td>
                            <td>25.88</td>
                            <td>90</td>
                            <td>4.7/5</td>
                            <td>لا</td>
                            <td></td>
                            <td>لا</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-footer-wrapper">
                <button type="button" className="btn btn-primary">تصدير لملف Excel</button>
                <div className="table-pagination">
                    <span className="w-100">Page 2/15</span>
                    <select id="table-pagination-select" className="form-control">
                        <option selected>أظهر 1000/صفحة</option>
                        <option>أظهر 2000/صفحة</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
