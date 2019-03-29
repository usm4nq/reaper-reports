import { Component, OnInit } from '@angular/core';

export interface ComponentList {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {
  components: ComponentList[] = [
    {value: 'header', viewValue: 'Header'},
    {value: 'table', viewValue: 'Table'},
    {value: 'footer', viewValue: 'Footer'},
    {value: 'divider', viewValue: 'Divider'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
