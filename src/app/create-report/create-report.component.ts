import { Component, OnInit } from '@angular/core';

class table {
  cType: String;
  rows: any[];
  constructor(rows: any[]) {
    this.cType = "table";
    this.rows = rows
  }
}

class row {
  data: any[];

  constructor(data: any[]) {
    this.data = data;
  }
}

class label {
  cType:String;
  text:any;
  constructor(text:any){
    this.cType = "label";
    this.text = text;
  }
}

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  report: any = [
    new table([
      new row(
        [
          new label("Name :"),
          new label("Noman")
        ]
      ),
      new row(
        [
          new label("Age :"),
          new label(13)
        ]
      )
    ]),
    new table(
      [
        new row(
          [
            new label(""),
            new label("Paper"),
            new label("Marks")
          ]
        ),
        new row(
          [
            new label(1),
            new label("Maths"),
            new label(100)
          ]
        ),
        new row(
          [
            new label(2),
            new label("Physics"),
            new label(97)
          ]
        )
      ]
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
