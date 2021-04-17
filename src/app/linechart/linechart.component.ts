import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { DBService } from '../shared/db.service';


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit, OnDestroy {

  sub: Subscription = new Subscription;
  testData = { "2013-09-01": "128.2597", "2013-09-02": "127.3648", "2013-09-03": "127.5915", "2013-09-04": "120.5738", "2013-09-05": "120.5333" }
  keysMy: string[] = Object.keys(this.testData);
  values: number[] = Object.values(this.testData).map(x => +x);

  lineChartData: ChartDataSets[] = []
  lineChartLabels: string[] = [];
  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderColor: 'rgba(22,19,226,1)',
    }
  ];

  constructor(private dbservice: DBService) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {

    this.sub = this.dbservice.getAll().subscribe(resp => {

      this.testData = resp
      this.keysMy = Object.keys(this.testData).slice(Math.max(Object.keys(this.testData).length - 40, 1))
      this.values = Object.values(this.testData).slice(Math.max(Object.keys(this.testData).length - 40, 1)).map(x => +x)

      this.lineChartData = [
        { data: this.values, label: "BTC" },
      ];
      this.lineChartLabels = this.keysMy;
    })
  }

  chartHovered(): void {
  }

  to_image(): void {
    const canvas = <HTMLCanvasElement>document.getElementById('thecanvas');
    const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href = image;
  }
}