import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SpaceXModule } from './spacex';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ThreeJsModule } from './threejs';
import { AppComponent, MAIN_COMPONENTS } from './components';

@NgModule({
  declarations: [...MAIN_COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaceXModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ThreeJsModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
