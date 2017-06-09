import { Injectable } from '@angular/core';
import {User} from '../../data';

@Injectable()
export class SearchService {

    private _users: Array<User>

    constructor(sourcedata: Array<User>) {
        this._users = sourcedata;
    }

    execute(keyword: string): Array<User> {
        const result = [];
        for (let user of this._users) {
            user = <User>user;
            if ( user.toString().indexOf(keyword) !== -1 ) {
                result.push(user);
            }
        }
        return result;
    }
}
