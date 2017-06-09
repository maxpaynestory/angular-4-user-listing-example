import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListingComponent } from './users/user-listing/user-listing.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListingComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
