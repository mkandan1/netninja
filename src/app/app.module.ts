import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import  {AngularFireModule}  from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LefNavComponent } from './lef-nav/lef-nav.component';
import { DeveloperProfileComponent } from './developer-profile/developer-profile.component';
import { CommunityProfileComponent } from './community-profile/community-profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommunityComponent } from './community/community.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PaymentsComponent } from './payments/payments.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { IssuesComponent } from './issues/issues.component';
import { TestcasesComponent } from './testcases/testcases.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { AcademyComponent } from './academy/academy.component';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    TopNavComponent,
    LefNavComponent,
    DeveloperProfileComponent,
    CommunityProfileComponent,
    ProjectsComponent,
    CommunityComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PaymentsComponent,
    AdvancedComponent,
    IssuesComponent,
    TestcasesComponent,
    ProjectBoardComponent,
    AcademyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'testcycles', component: ProjectsComponent},
      {path: 'issues', component: IssuesComponent},
      {path: 'testcases', component: TestcasesComponent},
      {path: 'projects', component: ProjectBoardComponent},
      {path: 'v1/auth/login', component: LoginComponent},
      {path: 'profile/user/about', component: CommunityProfileComponent},
      {path: 'account/my-profile', component: DeveloperProfileComponent},
      {path: 'account/payments', component: PaymentsComponent},
      {path: 'account/advanced', component: AdvancedComponent},
      {path: 'community', component: CommunityComponent},
      {path: 'academy', component: AcademyComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
