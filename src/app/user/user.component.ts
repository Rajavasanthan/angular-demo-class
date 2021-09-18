import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData = [
    {
      name: "Person 1",
      position: "CEO",
      office: "Google",
      age: 20,
      startDate: "2021-02-23",
      salary: 20000
    },
    {
      name: "Person 2",
      position: "CTO",
      office: "Apple",
      age: 44,
      startDate: "2021-02-23",
      salary: 34000
    },
    {
      name: "Person 2",
      position: "CTO",
      office: "Apple",
      age: 44,
      startDate: "2021-02-23",
      salary: 34000
    },
    {
      name: "Person 5",
      position: "CTO",
      office: "Apple",
      age: 44,
      startDate: "2021-02-23",
      salary: 34000
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
