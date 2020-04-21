import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.page.html',
  styleUrls: ['./sandbox.page.scss'],
})
export class SandboxPage implements OnInit {

  public count: number;
  public upVotesSum: number;
  public downVotesSum: number;
  
  constructor() { 
    this.count = 0;
    this.upVotesSum = 0;
    this.downVotesSum = 0;
  }

  ngOnInit() {
  }

  public countExpandible(event: boolean): void {
    (!event) ? this.count++ : this.count--;
  }

  public sumUp(event: number): void {
    this.upVotesSum += event;
  }

  public sumDown(event: number): void {
    this.downVotesSum += event;
  }
}
