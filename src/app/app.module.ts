import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter.module';
import { HerosModule } from './heroes/heros.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,CounterModule,HerosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
