import { Component, OnInit } from '@angular/core';
abstract class ReaperComponent {
  
}
class ReaperTable extends ReaperComponent {
  cType: String;
  rows: any[];
  constructor(rows: any[]) {
    super();
    this.cType = "table";
    this.rows = rows
  }
}

class ReaperTableRow extends ReaperComponent {
  data: ReaperComponent[];

  constructor(data: ReaperComponent[]) {
    super();
    this.data = data;
  }
}

class ReaperLabel {
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

  report: any = {

    template: [
    new ReaperTable([
      new ReaperTableRow(
        [
          new ReaperLabel("Name :"),
          new ReaperLabel("Noman")
        ]
      ),
      new ReaperTableRow(
        [
          new ReaperLabel("Age :"),
          new ReaperLabel(13)
        ]
      )
    ]),
    new ReaperTable(
      [
        new ReaperTableRow(
          [
            new ReaperLabel(""),
            new ReaperLabel("Paper"),
            new ReaperLabel("Marks")
          ]
        ),
        new ReaperTableRow(
          [
            new ReaperLabel(1),
            new ReaperLabel("Maths"),
            new ReaperLabel(100)
          ]
        ),
        new ReaperTableRow(
          [
            new ReaperLabel(2),
            new ReaperLabel("Physics"),
            new ReaperLabel(97)
          ]
        )
      ]
    )
  ]};

  constructor() { }

  ngOnInit() {
  }

}
