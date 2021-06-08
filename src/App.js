import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Appbar from './components/Appbar';
import UserLogin from './components/Applicants/Login/Login';
import MainDashboard from './components/Applicants/MainDashboard/MainDashboard';
import JobDescription from './components/Applicants/JobDescription/JobDescription';
import JobOffer from './components/Applicants/JobOffer/JobOffer';
import ApplicantData from './components/Applicants/ApplicantData/ApplicantData';
import ApplicantDocs from './components/Applicants/ApplicantDocs/ApplicantDocs';
import ApplicantRegion from './components/Applicants/ApplicantRegion/ApplicantRegion';
import ApplicantCity from './components/Applicants/ApplicantCity/ApplicantCity';
import ApplicantInterview from './components/Applicants/ApplicantInerview/ApplicantInerview';
import ApplicantSchool from './components/Applicants/ApplicantSchool/ApplicantSchool';

import AdminDashboard from './components/Recruitment/MainDashboard/AdminDashboard';
import QualificationStages from './components/Recruitment/QualificationStages/QualificationStages';
import ManageApplicants from './components/Recruitment/ManageApplicants/ManageApplicants';
import ContractOnboarding from './components/Recruitment/ManageApplicants/ContractOnboardingStage';
import MainTeacherDashboard from './components/Recruitment/MainTeacherDashboard/MainTeacherDashboard';


function App() {

  return (
    <div className="App">
      <Appbar />
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <MainDashboard />
          </Route>
          <Route path="/job-description" exact>
            <JobDescription />
          </Route>
          <Route path="/job-offer" exact>
            <JobOffer />
          </Route>
          <Route path="/applicant-data" exact>
            <ApplicantData />
          </Route>
          <Route path="/applicant-documents" exact>
            <ApplicantDocs />
          </Route>
          <Route path="/applicant-region" exact>
            <ApplicantRegion />
          </Route>
          <Route path="/applicant-city" exact>
            <ApplicantCity />
          </Route>
          <Route path="/applicant-interview" exact>
            <ApplicantInterview />
          </Route>
          <Route path="/applicant-school" exact>
            <ApplicantSchool />
          </Route>
        </Switch>

        <Switch>
          <Route path="/admin-dashboard" exact>
            <AdminDashboard />
          </Route>
          <Route path="/manage-applicants" exact>
            <ManageApplicants />
          </Route>
          <Route path="/qualification-stages" exact>
            <QualificationStages />
          </Route>
          <Route path="/system-management" exact>
            <MainTeacherDashboard />
          </Route>
          <Route path="/contract-onboarding" exact>
              <ContractOnboarding />
            </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
