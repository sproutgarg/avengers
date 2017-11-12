import { InMemoryDbService } from 'angular-in-memory-web-api';
import {HEROES} from './mock-heroes';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const heroes = [
      { id: 1, name: 'Thor' },
      { id: 2, name: 'Captain America' },
      { id: 3, name: 'Iron Man' },
      { id: 4, name: 'Hawk' },
      { id: 5, name: 'Black Widow' },
      { id: 6, name: 'Hulk' },
      { id: 7, name: 'Doctor Strange' },
      { id: 8, name: 'Black Panther' },
      { id: 9, name: 'Spider Man' }
    ];
    // return {heroes};
    return {HEROES};
  }
}