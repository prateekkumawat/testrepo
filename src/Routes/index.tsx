import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Allergies } from '../pages/Allergies/Allergies';
import { CreatePatient } from '../pages/CreatePatient/CreatePatient';
import { ForgotPassword } from '../pages/Login/ForgotPassword/ForgotPassword';
import { LoginPage } from '../pages/Login/LoginPage';
import { Patient } from '../pages/Patient/Patient';
import { ProviderHub } from '../pages/ProviderHub/ProviderHub';
import { CreateProvider } from '../pages/Providers/CreateProvider/CreateProvider';
import { Provider } from '../pages/Providers/Provider';
import { ViewAllProvider } from '../pages/Providers/ViewAllProvider/ViewAllProvider';
import { Schedule } from '../pages/Scheduling/Schedule';
import { ViewPatient } from '../pages/ViewPatient/ViewPatient';
import { RoutesPath } from './Routes';
import { SaopNotes } from '../pages/SoapNotes/SoapNotes';
import { NewTemplate } from '../pages/SoapNotes/NewTemplate/NewTemplate';
import { ICDCPTCodes } from '../pages/SoapNotes/ICDCPTCodes/ICDCPTCodes';

export const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateProvider />} />

      <Route path={RoutesPath.CREATE_PATIENT} element={<CreatePatient />} />
      <Route path={RoutesPath.GET_ALL_PATIENT} element={<Patient />} />
      <Route path={RoutesPath.GET_PATIENT_BY_ID} element={<ViewPatient />} />
      <Route
        path={RoutesPath.GET_PATIENT_Allergies_BY_ID}
        element={<Allergies />}
      />
      <Route path={RoutesPath.GET_ALL_SCHEDULE} element={<Schedule />} />
      <Route path={RoutesPath.GET_PROVIDER_BY_ID} element={<ProviderHub />}>
        <Route
          path={RoutesPath.PROVIDER_HUB_APPOINTMENT}
          element={<Provider />}
        />
        <Route
          path={RoutesPath.PROVIDER_HUB_AVAILABLITY}
          element={<Provider />}
        />
      </Route>
      <Route path={RoutesPath.ICDCPT_Codes} element={<ICDCPTCodes />} />
      <Route path={RoutesPath.PROVIDER} element={<Provider />}>
        <Route path={RoutesPath.CREATE_PROVIDER} element={<CreateProvider />} />
        <Route path={RoutesPath.PROVIDER} element={<Provider />} />
        <Route
          path={RoutesPath.GET_ALL_PROVIDER}
          element={<ViewAllProvider />}
        />
      </Route>
      <Route path={RoutesPath.SOAP_NOTES} element={<SaopNotes />} />
      <Route path={RoutesPath.CREATE_SOAP_NOTES} element={<NewTemplate />} />
      <Route path={RoutesPath.EDIT_SOAP_NOTES} element={<NewTemplate />} />
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
};

export const UnAuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* <Route path={RoutesPath.FORGOT_PASSWORD} element={<ForgotPassword />} /> */}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
};
