import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import { requireAuthentication as restrict } from 'containers/AuthenticatedComponent'

import AppContainer from 'containers/AppContainer'
import HeroPageLayout from 'containers/HeroPageLayout'
import AdminPageLayout from 'containers/AdminPageLayout'
import LandingPage from 'pages/LandingPage/LandingPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import ProfileEditPage from 'pages/ProfileEditPage/ProfileEditPage'

import AppLayout from 'containers/AppLayout'
import PageLayout from 'containers/PageLayout/PageLayout'
import StyleGuidePage from 'pages/StyleGuidePage/StyleGuidePage'
import LoginPage from 'pages/LoginPage/LoginPage'
import GridPage from 'pages/GridPage/GridPage'
import TasksPage from 'pages/TasksPage/TasksPage'

export default(
  // Route components without path will render their children...
  <Route component={AppContainer}>
    <Route component={AppLayout}>
      <Route path="/styleguide" component={StyleGuidePage} />
      <Route path="/grid" component={GridPage} />
    </Route>
    <Route component={PageLayout}>
      <Route path="/login" component={LoginPage} />
      <Route path="/tasks" component={TasksPage} >
        <Route path="/tasks/:taskId" component={TasksPage} />
      </Route>
    </Route>
    <Route path="/styleguide" component={StyleGuidePage} />
    <Route path="/login" component={LoginPage} />
    { /* until a match is found... */ }
    <Route component={HeroPageLayout}>
      <Route path="/" component={LandingPage} />
      { /* Routes without a component will render their children: */ }
      <Route path="/pages" >
        <IndexRedirect to="about-us" />
        <Route path="about-us" component={AboutPage} />
        <Route path="faq" component={AboutPage} />
      </Route>
    </Route>

    <Route path="/account" component={AdminPageLayout}>
      <Route path="/profile/edit" component={restrict(ProfileEditPage)} />
    </Route>
  </Route>
)
