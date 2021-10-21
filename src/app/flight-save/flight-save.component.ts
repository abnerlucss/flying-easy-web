import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-save',
  templateUrl: './flight-save.component.html',
  styleUrls: ['./flight-save.component.scss']
})
export class FlightSaveComponent implements OnInit {
  public percentageProgress: number = 0

  constructor() { }

  ngOnInit() {
  }

  public next() {
    this.percentageProgress += 33.33;    
  }

}
