import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportComponent } from '../report/report.component'

@Component({
  selector: 'app-creator-lab',
  templateUrl: './creator-lab.component.html',
  styleUrls: ['./creator-lab.component.css']
})
export class CreatorLabComponent implements OnInit {
  @ViewChild(ReportComponent) rs;
  rp;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.rp = this.rs.report;
  }

}
