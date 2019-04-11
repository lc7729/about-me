import { Component, OnInit, Input } from "@angular/core";

import { Hobbies } from "../hobbies.model";

@Component({
  selector: "app-hobbies",
  templateUrl: "./hobbies.component.html",
  styleUrls: ["./hobbies.component.css"]
})
export class HobbiesComponent implements OnInit {
  @Input()
  hobbies: Hobbies[];

  constructor() {}

  ngOnInit() {}

  showSelect() {}
}
