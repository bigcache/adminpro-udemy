import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress:ElementRef; 
  @Input() leyenda='Leyenda';
  @Input() progreso: number = 50; 

  @Output() cambioValor: EventEmitter<number> = new EventEmitter;

  constructor() {
  //   console.log('Leyenda' + this.leyenda)
  //   console.log('Progreso' + this.progreso)
  }

  ngOnInit() {
  
  console.log('Leyenda' + this.leyenda);
  console.log('Progreso' + this.progreso);
}

onChanges (newValue:number){
// let elemHTML:any = document.getElementsByName('progreso')[0];
// console.log(elemHTML.value);

if (newValue>=100) {
this.progreso=100;
}else if (newValue<=0) {
  this.progreso=0;
}else {
this.progreso=newValue;
}
// elemHTML.value=this.progreso;
this.txtProgress.nativeElement.value=this.progreso;
this.cambioValor.emit(this.progreso);

}
  cambiarValor(valor: number){
    if (this.progreso <= 0 && valor < 0 ) {
      return;
    }
    if (this.progreso >= 100 && valor > 0 ) {
      return;
    }
      this.progreso = this.progreso + valor;
      this.cambioValor.emit(this.progreso);
      this.txtProgress.nativeElement.focus();
    }
  
}
