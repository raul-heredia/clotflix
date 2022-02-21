import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  animations: [
    trigger('arriba', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-300%)' }),
        animate(1000)
      ])
    ])
  ]
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
