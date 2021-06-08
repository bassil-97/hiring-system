import React from 'react';
import './QualificationStages.css';

export default function CityFilter() {
    return (
        <div className="primary-filter">
            <h6>المرحلة 3 - اختيار المدينة</h6>
            <div className="primary-filter-form">
                <form>
                    <h6 className="mb-4">مصنف بواسطة</h6>
                    <div className="row mb-2 px-2">
                        <div className="col p-0 my-2">
                            <select className="form-control w-100">
                                <option>الحالة الإجتماعية</option>
                            </select>
                        </div>
                        <div className="col-sm-3 px-2 my-2">
                            <input type="text" className="form-control w-100" value="<" readOnly />
                        </div>
                        <div className="col p-0 my-2">
                            <select className="form-control w-100">
                                <option>متزوج</option>
                            </select>
                        </div>
                    </div>
                    <h5 className="my-2">&</h5>
                    <div className="row px-2">
                        <div className="col p-0 my-2">
                            <select className="form-control w-100">
                                <option>المدينة</option>
                            </select>
                        </div>
                        <div class="col-sm-3 px-2 my-2">
                            <input type="text" className="form-control" value=">" readOnly />
                        </div>
                        <div class="col p-0 my-2">
                            <select className="form-control w-100">
                                <option>مدينتك</option>
                            </select>
                        </div>
                    </div>
                    <h5 className="my-2">&</h5>
                    <div className="row px-2">
                        <div class="col p-0 my-2">
                            <select className="form-control w-100">
                                <option>العمر</option>
                            </select>
                        </div>
                        <div className="col-sm-3 px-2 my-2">
                            <input type="text" className="form-control w-100" value=">" readOnly />
                        </div>
                        <div className="col p-0 my-2">
                            <select className="form-control w-100">
                                <option>الأعلى أفضل</option>
                            </select>
                        </div>
                    </div>
                </form>
                <button type="button" className="btn btn-primary filter-btn">تشغيل المرشح</button>
            </div>
            <div className="filter-footer">
                <small>إعلام مقدم الطلب بحجز المقابلة</small>
            </div>
        </div>
    )
}
