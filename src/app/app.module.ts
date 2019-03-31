import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { MatInputModule, MatTableModule, MatCardModule, MatGridListModule, MatButtonModule,
  MatSelectModule, MatFormFieldModule, MatDividerModule, MatListModule, MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReportComponent } from './report/report.component';
import { CreatorLabComponent } from './creator-lab/creator-lab.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Reports', component: ReportsComponent },
  { path: 'creator-lab', component: CreatorLabComponent},
  {
    path: '',
    redirectTo: '/creator-lab',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }//page not found
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportsComponent,
    ReportComponent,
    CreatorLabComponent,
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
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
