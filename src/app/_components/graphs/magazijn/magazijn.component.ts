import {Component, OnInit} from '@angular/core';
import {ChartType} from "angular-google-charts";
import {GraphService} from "../../../_services/graph/graph.service";

@Component({
  selector: 'app-production',
  templateUrl: './magazijn.component.html',
  styleUrls: ['./magazijn.component.scss']
})
export class MagazijnComponent implements OnInit {
  loading = false;
  myData = [];
  chartColumns = [];
  type = ChartType.ColumnChart;
  myOptions = {
    colors: ['#4658a0', '#06af85', '#ff0000'],
    height: 500,
    backgroundColor: 'transparent',
    legend: {position: 'top', maxLines: 0},
    bar: {groupWidth: '75%'},
    chartArea: {
      left: 40,
      width: '100%'
    },
    isStacked: true,
    series: {2: {type: 'line'}}
  };
  dynamicResize = true;

  valueExpected!: number;
  value!: number;
  constructor(private graphService: GraphService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.graphService.getMagazijn().subscribe(data => {
      this.chartColumns = data[0];
      this.value = data[1][1];
      console.log(data);
      data.splice(0, 1);
      data.forEach((item: any, index: number) => {
        item[1] = +item[1]
        item[2] = +item[2]
        item[3] = +item[3]
        this.valueExpected += item[2] << 0;
      });
      this.loading = false;
      this.myData = data;
    });
  }

}
