import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import TopBanner from './components/TopBanner/TopBanner';
import TopNav from './components/TopNav/TopNav';
import Services from './components/Services/Services';
import ServicesProvider from './contexts/ServicesProvider';
import Footer from './components/Footer/Footer';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import UserAccount from './components/UserAccount/UserAccount';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ManageAppointments from './components/ManageAppointments/ManageAppointments';
import GetApp from './components/GetApp/GetApp';

function App() {
  return (
    <AuthProvider>
      <ServicesProvider>
        <BrowserRouter>
          <TopNav></TopNav>
          <Switch>
            <Route exact path='/'>
              <TopBanner></TopBanner>
              <Services></Services>
            </Route>
            <Route path='/home'>
              <TopBanner></TopBanner>
              <Services></Services>
            </Route>
            <PrivateRoute path='/service/:id'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path='/appointments'>
              <ManageAppointments></ManageAppointments>
            </PrivateRoute>
            <Route path='/login'>
              <UserAccount></UserAccount>
            </Route>
            <Route path='/app'>
              <GetApp></GetApp>
            </Route>
            <Route path='*'>
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </ServicesProvider>
    </AuthProvider>
  );
}

export default App;
