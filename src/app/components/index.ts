import { Type } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './navbar/navbar.component';

export const MAIN_COMPONENTS: Type<unknown>[] = [AppComponent, NavbarComponent];

export * from './app/app.component';
export * from './navbar/navbar.component';
