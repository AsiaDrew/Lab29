import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SIngleDonut } from '../gcdonut';
import { GCDonutService } from '../gcdonut.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css'],
})
export class DonutDetailComponent implements OnInit {
  displayDonut: SIngleDonut = {} as SIngleDonut;

  constructor(
    private route: ActivatedRoute,
    private donutService: GCDonutService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id: number = Number(routeParams.get('id'));
    this.donutService.getDonutDetail(id).subscribe((response: SIngleDonut) => {
      this.displayDonut = response;
    });
  }
}
