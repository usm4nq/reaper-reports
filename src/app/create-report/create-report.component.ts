import { Component, OnInit } from '@angular/core';
import { ReaperSection, ReaperRow, ReaperLabel, IReport, ReaperDivider } from '../../Reaper/core';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  report: IReport = {
    name: "Name of Report",
    template: [
    new ReaperSection([
      new ReaperRow(
        [
          new ReaperLabel("Name :"),
          new ReaperLabel("Noman")
        ]
      ),
      new ReaperDivider(),
      new ReaperRow(
        [
          new ReaperLabel("Age :"),
          new ReaperLabel(13)
        ]
      )
    ], "Header"),
    new ReaperDivider(),
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
        new ReaperDivider(),
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
