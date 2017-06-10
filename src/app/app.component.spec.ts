import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { UserListingComponent } from './users/user-listing/user-listing.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';

describe('AppComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                UserListingComponent,
                SideNavComponent
            ],
        }).compileComponents();
    }));

  it ('App component should be there', () => {
      expect(true).toEqual(true);
  })

});
