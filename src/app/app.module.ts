import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FriendsComponent } from "./friends/friends.component";
import { FamilyComponent } from "./family/family.component";
import { HobbiesComponent } from "./hobbies/hobbies.component";
import { AddYearPipe } from "./add-year.pipe";
import { PersonComponent } from "./person/person.component";

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FamilyComponent,
    HobbiesComponent,
    AddYearPipe,
    PersonComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
