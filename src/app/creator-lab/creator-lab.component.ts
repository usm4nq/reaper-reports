import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ReportComponent } from '../report/report.component';
import { IReport, ReaperSection, ReaperRow, ReaperLabel } from '../../Reaper/core'

@Component({
  selector: 'app-creator-lab',
  templateUrl: './creator-lab.component.html',
  styleUrls: ['./creator-lab.component.css']
})
export class CreatorLabComponent implements OnInit {
  @ViewChild(ReportComponent) childReportComponent;

  report:IReport = {name: "", template:[new ReaperSection([new ReaperRow([new ReaperLabel("Empty")])],"empty")]}

  selectedComponent;
  createAbleComponents:String[] = ["section", "divider"];
  testp:String = "Nothing";

  windowHeight;

  constructor() { }

  ngOnInit() {
    this.windowHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.windowHeight = window.innerHeight;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.report = this.childReportComponent.report;
  }

  test(){
    this.report.template.push(new ReaperSection([new ReaperRow([new ReaperLabel("Empty")])],"empty"));
  }

}
