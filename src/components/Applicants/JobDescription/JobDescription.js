import React from 'react';
import './JobDescription.css';

import { useHistory } from 'react-router-dom';
import Notification from '../../Notification';

export default function JobDescription() {

    let history = useHistory();

    const redirectTo = (link) => {
        history.push(`/${link}`);
    }

    return (
        <div>
            <div className="container job-description">
                <Notification 
                    color="info" 
                    message={"من فضلك راجع عرض العمل والمسؤوليات"} 
                />
                <div className="job-description-details">
                    <div className="job-description-section mb-4">
                        <h5 className="ml-2 font-weight-bold">المسمى الوظيفي: </h5>
                        <h6>معلم</h6>
                    </div>
                    <div className="job-description-section-col">
                        <h5 className="ml-2 font-weight-bold">تفاصيل الوظيفة: </h5>
                        <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking
                         at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                         as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
                          accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                    <div className="job-description-section-col">
                        <h5 className="ml-2 font-weight-bold">مهام الوظيفة: </h5>
                        <ul className="mr-4">
                            <li>مهمة 1</li>
                            <li>مهمة 2</li>
                            <li>مهمة 3</li>
                            <li>مهمة 4</li>
                            <li>مهمة 5</li>
                        </ul>
                    </div>
                </div>
                <div className="job-description-footer">
                    <button type="button" className="btn btn-primary" onClick={()=> redirectTo("job-offer")}>قبول</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> history.goBack()}>رفض</button>
                </div>
            </div>
        </div>
    )
}
