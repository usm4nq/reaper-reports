import { Component, OnInit } from '@angular/core';
import { ReaperSection, ReaperRow, ReaperLabel, IReport, ReaperDivider } from '../../Reaper/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

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

}
