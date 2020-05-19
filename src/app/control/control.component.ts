import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  counter: number = 0;
  title: string = 'Misko Heverly'

  ngOnInit(): void {
  }
  
  add() {
    this.counter++
  }

  substract() {
    this.counter--
  }

}
