import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { SpaceXModule } from './spacex';
import { ThreeJsModule } from './threejs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, MAIN_COMPONENTS } from './components';

@NgModule({
  declarations: [...MAIN_COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaceXModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ThreeJsModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
