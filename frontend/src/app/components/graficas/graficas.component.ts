import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import * as _ from 'lodash';
declare var Plotly: any;
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
  @ViewChild('chart') el: ElementRef;
  constructor() { }

  ngOnInit() {
    this.basicChart();
  }
  basicChart() {
    const element = this.el.nativeElement
    var data = [{
      values: [16, 15],
      marker: {
        'colors': [
          '#000000',
          '#00b381'
          
        ]
      },
      labels: ['', 'Ganados'],
      domain: {
        x: [0, .88]
      },

      name: 'GHG Emissions',
      hoverinfo: 'label+percent+name',
      hole: .9,
      type: 'pie'
    }];

    var layout = {
      title: 'Global Emissions 1990-2011',
      height: 400,
      width: 500,
      paper_bgcolor: 'rgba(0, 0, 0, 0)',
      annotations: [
        {
          font: {
            size: 14
          },
          showarrow: false,
          text: '',
          x: 0.17,
          y: 0.5
        },
        {
          font: {
            size: 14
          },
          showarrow: false,
          text: '%',
          x: 0.82,
          y: 0.5
        }
      ]
    };

    Plotly.newPlot(element, data, layout,{displayModeBar: false});
  }
}
