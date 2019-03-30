abstract class ReaperComponent {
  name:String;
  cType: String;
}





export interface IReaperSection{
    name: String;
    cType: String;
    rows: IReaperRow[];
}
export class ReaperSection extends ReaperComponent { 
  rows: ReaperComponent[];
  constructor(rows: ReaperComponent[], name: String) {
    super();
    this.name = name;
    this.cType = "table";
    this.rows = rows
  }
}





export interface IReaperRow{
    data: ReaperComponent[];
}
export class ReaperRow extends ReaperComponent {
  data: ReaperComponent[];

  constructor(data: ReaperComponent[]) {
    super();
    this.data = data;
  }
}




export interface IReaperLabel extends ReaperComponent{
    cType: String;
    value: any;
}
export class ReaperLabel extends ReaperComponent{
  cType:String;
  value:any;
  constructor(text:any){
    super();
    this.cType = "label";
    this.value = text;
  }
}





export class ReaperDivider extends ReaperComponent{
    cType: String;
    name: String;
    constructor(){
        super();
        this.cType = "divider";
        this.name = "Divider";
    }
}




export interface IReport{
    name: String;
    template: ReaperComponent[];
}