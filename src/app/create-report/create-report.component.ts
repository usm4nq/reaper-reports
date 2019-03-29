import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  report: any = [
    {
      cType: "table",
      rows:
        [
          {
            data:
              [
                { cType: "label", text: "Name :" },
                { cType: "label", text: "Noman" }
              ]
          },
          {
            data:
              [
                { cType: "label", text: "Age :"},
                { cType: "label", text: 23}
              ]
          }
        ]
    },
    {
      cType: "table",
      rows:
      [
        {
          data:
          [
            {cType: "label", text: ""},
            {cType: "label", text: "Paper"},
            {cType: "label", text: "Marks"}
          ]
        },
        {
          data:
          [
            {cType: "label", text: 1},
            {cType: "label", text: "Maths"},
            {cType: "label", text: 100}
          ]
        },
        {
          data:
          [
            {cType: "label", text: 2},
            {cType: "label", text: "Physics"},
            {cType: "label", text: 97}
          ]
        }
      ]
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
