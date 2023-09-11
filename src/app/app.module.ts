import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SavedUserListComponent } from './components/saved-user-list/saved-user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SavedUserListComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
