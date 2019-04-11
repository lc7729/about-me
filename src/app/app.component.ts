import { Component, OnInit } from "@angular/core";
import { Family } from "./family.model";
import { Friends } from "./friends.model";
import { Hobbies } from "./hobbies.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title: string = "My Information Page";
  friends: Friends[];
  family: Family[];
  hobbies: Hobbies[];

  constructor() {}

  ngOnInit(): void {
    this.friends = [
      {
        name: "Vivian",
        gender: "female",
        numberOfYearsKnown: 25
      },
      {
        name: "Susie",
        gender: "female",
        numberOfYearsKnown: 23
      },
      {
        name: "Limei",
        gender: "female",
        numberOfYearsKnown: 14
      }
    ];
    this.family = [
      {
        relation: "Husband",
        name: "Robert",
        age: 57
      },
      {
        relation: "Daughter",
        name: "Christine",
        age: 23
      },
      {
        relation: "Daughter",
        name: "Lauren",
        age: 19
      }
    ];
    this.hobbies = [
      {
        name: "Reading",
        numberOfYearsEngaging: 46
      },
      {
        name: "Music",
        numberOfYearsEngaging: 44
      },
      {
        name: "Sketching",
        numberOfYearsEngaging: 41
      }
    ];
  }
}
