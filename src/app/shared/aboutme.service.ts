import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Family } from "../family.model";
import { Friends } from "../friends.model";
import { Hobbies } from "../hobbies.model";

@Injectable({
  providedIn: "root"
})
export class AboutmeService {
  familyUrl = "http://localhost:4445/family";
  friendsUrl = "http://localhost:4445/friends";
  hobbiesUrl = "http://localhost:4445/hobbies";

  constructor(private http: HttpClient) {}

  getFamily(): Observable<Family[]> {
    return this.http.get<Family[]>(this.familyUrl);
  }

  getFriends(): Observable<Friends[]> {
    return this.http.get<Friends[]>(this.friendsUrl);
  }

  getHobbies(): Observable<Hobbies[]> {
    return this.http.get<Hobbies[]>(this.hobbiesUrl);
  }
}
