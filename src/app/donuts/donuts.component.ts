import { Component, OnInit } from '@angular/core';
import { GCDonut } from '../gcdonut';
import { GCDonutService } from '../gcdonut.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css'],
})
export class DonutsComponent implements OnInit {
  donuts: GCDonut = {} as GCDonut;
  constructor(private donutService: GCDonutService) {}

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe((response: GCDonut) => {
      this.donuts = response;
    });
  }
}
