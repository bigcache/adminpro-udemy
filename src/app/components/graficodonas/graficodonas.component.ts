import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficodonas',
  templateUrl: './graficodonas.component.html',
  styleUrls: []
})
export class GraficodonasComponent implements OnInit {
    // Doughnut
    @Input() doughnutChartLabels:string[]=[];
    @Input() doughnutChartData:number[]=[];
    @Input() doughnutChartType:string="";
    @Input() leyenda:string;
  constructor() { }

  ngOnInit() { 
  }

}
