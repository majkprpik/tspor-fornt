import { Component, OnInit } from '@angular/core';
import { faHome, faCalendarDays, faTrophy, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  faHome = faHome;
  faMagnifyingGlass = faMagnifyingGlass;
  faCalendarDays = faCalendarDays;
  faTrophy = faTrophy;
  constructor() {}

  ngOnInit(): void {}

  apply(par: string) {
    alert("Apply")
  }
}
