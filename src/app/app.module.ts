import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LefNavComponent } from './lef-nav/lef-nav.component';
import { DeveloperProfileComponent } from './developer-profile/developer-profile.component';
import { CommunityProfileComponent } from './community-profile/community-profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { AssignedComponent } from './assigned/assigned.component';
import { CommunityComponent } from './community/community.component';
import { ClosedComponent } from './closed/closed.component';

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
    AssignedComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'account/my-profile', component: DeveloperProfileComponent},
      {path: 'profile/user/about', component: CommunityProfileComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'projects/assigned', component: AssignedComponent},
      {path: 'projects/assigned/closed', component: ClosedComponent},
      {path: 'community', component: CommunityComponent},
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
