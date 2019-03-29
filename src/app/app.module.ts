import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { MatInputModule, MatTableModule, MatCardModule, MatGridListModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Reports', component: ReportsComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: ReportsComponent }//page not found
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportsComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
