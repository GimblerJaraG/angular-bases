import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public herosName: string[] = ['spiderman', 'Holk', 'Iroman', 'thor'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.herosName.pop();
    console.log(this.deletedHero);
  }
}
