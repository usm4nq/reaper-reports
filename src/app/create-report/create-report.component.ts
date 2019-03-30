import { Component, OnInit } from '@angular/core';
abstract class ReaperComponent {
  
}
class ReaperSection extends ReaperComponent { 
  name: String;
  cType: String;
  rows: any[];
  constructor(rows: any[], name: String) {
    super();
    this.name = name;
    this.cType = "table";
    this.rows = rows
  }
}

class ReaperRow extends ReaperComponent {
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

  reports: String[] = ["aaa","bbb","ccc"];

  report: any = {

    template: [
    new ReaperSection([
      new ReaperRow(
        [
          new ReaperLabel("Name :"),
          new ReaperLabel("Noman")
        ]
      ),
      new ReaperRow(
        [
          new ReaperLabel("Age :"),
          new ReaperLabel(13)
        ]
      )
    ], "Header"),
    new ReaperSection(
      [
        new ReaperRow(
          [
            new ReaperLabel(""),
            new ReaperLabel("Paper"),
            new ReaperLabel("Marks")
          ]
        ),
        new ReaperRow(
          [
            new ReaperLabel(1),
            new ReaperLabel("Maths"),
            new ReaperLabel(100)
          ]
        ),
        new ReaperRow(
          [
            new ReaperLabel(2),
            new ReaperLabel("Physics"),
            new ReaperLabel(97)
          ]
        )
      ],
      "Body"
    )
  ]};

  constructor() { }

  ngOnInit() {
  }

  addNewSection(name: String) {
    this.report.template.push(
      new ReaperSection([
        new ReaperRow(
          [
            new ReaperLabel("Name :"),
            new ReaperLabel("Noman")
          ]
        ),
        new ReaperRow(
          [
            new ReaperLabel("Age :"),
            new ReaperLabel(13)
          ]
        )
      ],
      name
      )
    )
  }

}
