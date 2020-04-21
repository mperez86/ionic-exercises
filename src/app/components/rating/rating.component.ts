import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  upButton: number;
  downButton: number;


  @Input()
  public ups?: number;

  @Input()
  public downs?: number;

  @Output()
  public sumUp = new EventEmitter();

  @Output()
  public sumDown = new EventEmitter();


  constructor() { 
   
  }

  ngOnInit() {
    this.upButton = (this.ups) ? this.ups : 0;
    this.downButton = (this.downs) ? this.downs : 0;

    //console.log(this.ups);
    console.log(this.downButton);

    this.sumUp.emit(this.upButton);
    this.sumDown.emit(this.downButton);
  }

  public up(): void {
    this.upButton++;
    this.sumUp.emit(1);
  }

  public down(): void {
    this.downButton++;
    this.sumDown.emit(1);
  }

  public avarageCalculate(): number {
    let total = this.upButton + this.downButton;

    return (total === 0) ? total :  parseFloat(((this.upButton * 10) / total ).toFixed(2))
  }
}
