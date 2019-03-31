import { Component, OnInit, ViewChild } from '@angular/core';
import { ReaperSection, ReaperRow, ReaperLabel, IReport, ReaperDivider } from '../../Reaper/core';

import { ReportComponent } from '../report/report.component'

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  @ViewChild(ReportComponent) reportChildComponent;

  report: IReport;

  selectedComponent:String;
  createAbleComponents:String[] = ["section", "divider"];
  testp:String = "Nothing";

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.report = this.reportChildComponent.report;
  }

  addNewSection(name: String) {
     
  }

}
