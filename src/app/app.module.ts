import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { MatInputModule, MatTableModule, MatCardModule, MatGridListModule, MatButtonModule, MatSelectModule, MatFormFieldModule, MatDividerModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CreateReportComponent } from './create-report/create-report.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Reports', component: ReportsComponent },
  { path: 'Create-New-Report', component: CreateReportComponent},
  {
    path: '',
    redirectTo: '/Create-New-Report',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }//page not found
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
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
