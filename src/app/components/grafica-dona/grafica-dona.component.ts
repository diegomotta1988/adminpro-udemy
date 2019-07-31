import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styleUrls: ['./grafica-dona.component.scss']
})
export class GraficaDonaComponent implements OnInit {



  @Input() chartData: number[] = [];
  @Input() chartLabels: string[] = [];
  @Input() chartType: string = '';
  constructor() { }

  ngOnInit() {
  }

}
