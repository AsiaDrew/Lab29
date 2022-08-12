import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complete, GCComputer } from '../gccomputer';
import { GCComputerService } from '../gccomputer.service';

@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.css'],
})
export class FamousPersonDetailComponent implements OnInit {
  gcComputer: Complete = {} as Complete;

  constructor(
    private route: ActivatedRoute,
    private gcComputerService: GCComputerService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let name: string = String(routeParams.get('firstName'));
    console.log(name);
    this.gcComputerService.getInventors().subscribe((response: GCComputer) => {
      this.gcComputer = response.complete.find((m) => m.firstName == name)!;
    });
  }
}
