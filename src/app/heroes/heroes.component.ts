import { HeroService } from './../hero.service';
import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  selectedHero : Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // onSelect(val: Hero): void {
  //   this.selectedHero = val;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${val.id}`);
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  getHeroes(): void {
    this.heroService.getHeros().subscribe(result => {
      this.heroes = result;
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
