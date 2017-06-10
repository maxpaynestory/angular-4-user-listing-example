import { Component} from '@angular/core';
import {User} from '../../data'
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent {

    private _users: Array<User>;
    private _searchService: SearchService;
    checkAll: Boolean = false;

    constructor() {
        this._users = this.returnStaticData();
        this._searchService = new SearchService(this._users);
    }

    get users() {
        return this._users;
    }

    searchUsers(searchKeyword) {
        this._users = this._searchService.execute(searchKeyword);
    }

    toggleCheckboxes(isChecked: Boolean) {
        this.checkAll = isChecked;
    }

    private returnStaticData(): Array<User> {
        return [
            new User(
                '235324',
                'User 5239',
                'Sender 100',
                'myemail@whateverdomain.com',
                'Business Customer'
            ),
            new User(
                '007343343f',
                'User 007',
                'Sender jeremy',
                'onemoreemail@whateverdomain.com',
                'Business Customer'
            )
        ];
    }
}
