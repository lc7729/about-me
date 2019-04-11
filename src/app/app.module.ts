import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { FamilyComponent } from './family/family.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AddYearPipe } from './add-year.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FamilyComponent,
    HobbiesComponent,
    AddYearPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
