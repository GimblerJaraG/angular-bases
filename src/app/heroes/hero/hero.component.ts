import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;
  public button:boolean=true;
  public button1:boolean=true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name="battman"
    this.button=false;
  }

  changeAge():void{
    this.age=28;
    this.button1=false;
  }

  resetForm():void{
    this.name="iroman";
    this.age=45;
    this.button=true;
    this.button1=true;
  }
}
