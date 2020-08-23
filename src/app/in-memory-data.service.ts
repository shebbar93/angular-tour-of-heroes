import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 11, name: 'Srinidhi' },
      { id: 12, name: 'Akshay' },
      { id: 13, name: 'Raghs' },
      { id: 14, name: 'Raghu Gowda' },
      { id: 15, name: 'Rakshith' },
      { id: 16, name: 'Pallavi' },
      { id: 17, name: 'Shreyas' },
      { id: 18, name: 'Raghuveera' },
      { id: 19, name: 'Viswa' },
      { id: 20, name: 'Satish' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
