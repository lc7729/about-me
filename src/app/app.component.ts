import { Component, OnInit } from "@angular/core";
import { Family } from "./family.model";
import { Friends } from "./friends.model";
import { Hobbies } from "./hobbies.model";
import { AboutmeService } from "./shared/aboutme.service";

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
  word: string;

  constructor(private aboutmeService: AboutmeService) {}

  getFamily() {
    //this.albums = this.albumService.getAlbums();
    this.aboutmeService.getFamily().subscribe(
      (family: Family[]) => {
        this.family = family;
      },
      error => console.log("Error: ", error)
    );
  }

  ngOnInit(): void {
    this.getFamily();
    // this.friends = [
    //   {
    //     name: "Vivian",
    //     gender: "female",
    //     numberOfYearsKnown: 25
    //   },
    //   {
    //     name: "Susie",
    //     gender: "female",
    //     numberOfYearsKnown: 23
    //   },
    //   {
    //     name: "Limei",
    //     gender: "female",
    //     numberOfYearsKnown: 14
    //   }
    // ];
    // this.family = [
    //   {
    //     relation: "Husband",
    //     name: "Robert",
    //     age: 57
    //   },
    //   {
    //     relation: "Daughter",
    //     name: "Christine",
    //     age: 23
    //   },
    //   {
    //     relation: "Daughter",
    //     name: "Lauren",
    //     age: 19
    //   }
    // ];
    // this.hobbies = [
    //   {
    //     name: "Reading",
    //     numberOfYearsEngaging: 46
    //   },
    //   {
    //     name: "Music",
    //     numberOfYearsEngaging: 44
    //   },
    //   {
    //     name: "Sketching",
    //     numberOfYearsEngaging: 41
    //   }
    // ];
  }

  logForm(formData) {
    console.log(formData.word);
    this.word = formData.word;
    alert("Word = " + this.word);
  }
}
