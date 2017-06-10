import { SearchService } from './search.service';
import { User } from '../../data';

describe('SearchService', () => {

    it('Search Service can be instantiated', () => {
        expect(new SearchService([]) instanceof SearchService).toEqual(true);
    });

    it('Empty search result with keyword not found', () => {
        const users = [
            new User('id', 'name', 'sender', 'email', 'type')
        ];
        const searchService = new SearchService(users);
        expect(searchService.execute('unknownkeyword')).toEqual([]);
    });

    it('Some users with matching keyword', () => {
        const user =  new User('id', 'name', 'sender', 'email', 'type');
        const users = [
           user
        ];
        const searchService = new SearchService(users);
        expect(searchService.execute('sender')).toEqual([user]);
    });
});
