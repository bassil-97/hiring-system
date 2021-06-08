import React from 'react';
import './QualificationStages.css';

export default function PrimaryFilter() {
    return (
        <div className="primary-filter">
            <h6>المرحلة 1 - المرشح الأساسي</h6>
            <div className="primary-filter-form">
                <form>
                    <h6 className="mb-4">مصنف بواسطة</h6>
                    <div className="row mb-2 px-2">
                        <div className="col p-0 my-2">
                            <select class="form-control w-100">
                                <option>العمر</option>
                            </select>
                        </div>
                        <div className="col-sm-3 px-2 my-2">
                            <input type="text" className="form-control w-100" value="<" readOnly />
                        </div>
                        <div className="col p-0 my-2">
                            <input type="text" className="form-control w-100" value={29} placeholder="age" readOnly />
                        </div>
                    </div>
                    <h5 className="my-2">&</h5>
                    <div className="row px-2">
                        <div className="col p-0 my-2">
                            <select class="form-control w-100">
                                <option>قياس</option>
                            </select>
                        </div>
                        <div className="col-sm-3 px-2 my-2">
                            <input type="text" className="form-control w-100" value=">" readOnly />
                        </div>
                        <div className="col p-0 my-2">
                            <input type="text" className="form-control w-100" value={70} placeholder="Qiyas" readOnly />
                        </div>
                    </div>
                    <h5 className="my-2">&</h5>
                    <div className="row px-2">
                        <div className="col p-0 my-2">
                            <select className="form-control w-100">
                                <option>المعدل التراكمي</option>
                            </select>
                        </div>
                        <div className="col-sm-3 px-2 my-2">
                            <input type="text" className="form-control w-100" value=">" readOnly />
                        </div>
                        <div className="col p-0 my-2">
                            <input type="text" className="form-control w-100" value={3} placeholder="GPA" readOnly />
                        </div>
                    </div>
                </form>
                <button type="button" className="btn btn-primary filter-btn">تشغيل المرشح</button>
            </div>
            <div className="filter-footer">
                <small>إعلام مؤهل لجعل المنطقة المفضلة</small>
            </div>
        </div>
    )
}
