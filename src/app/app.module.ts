import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { MatInputModule, MatTableModule, MatCardModule, MatGridListModule, MatButtonModule, MatSelectModule, MatFormFieldModule, MatDividerModule } from '@angular/material';
import { CreateReportComponent } from './create-report/create-report.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Reports', component: ReportsComponent },
  { path: 'create-new-report', component: CreateReportComponent },
  {
    path: '',
    redirectTo: '/create-new-report',
    pathMatch: 'full'
  },
  { path: '**', component: CreateReportComponent }//page not found
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportsComponent,
    CreateReportComponent,
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
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
