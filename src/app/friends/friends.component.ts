import { Component, OnInit, Input } from "@angular/core";

import { Friends } from "../friends.model";

@Component({
  selector: "app-friends",
  templateUrl: "./friends.component.html",
  styleUrls: ["./friends.component.css"]
})
export class FriendsComponent implements OnInit {
  @Input()
  friends: Friends[];

  constructor() {}

  ngOnInit() {}
}
