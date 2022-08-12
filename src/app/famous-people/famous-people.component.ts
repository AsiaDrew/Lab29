import { Component, OnInit } from '@angular/core';
import { GCComputer } from '../gccomputer';
import { GCComputerService } from '../gccomputer.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css'],
})
export class FamousPeopleComponent implements OnInit {
  gcComputer: GCComputer = {} as GCComputer;
  constructor(private gcComputerService: GCComputerService) {}

  ngOnInit(): void {
    this.gcComputerService.getInventors().subscribe((response: GCComputer) => {
      this.gcComputer = response;
    });
  }
}
