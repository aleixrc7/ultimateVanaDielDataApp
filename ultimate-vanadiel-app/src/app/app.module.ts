import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryComponent } from './components/history/history.component';
import { SharedModule } from './shared/shared/shared.module';
import { BestiaryComponent } from './components/bestiary/bestiary.component';
import { RacesComponent } from './components/races/races.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { GuidesComponent } from './components/guides/guides.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { RegistryComponent } from './components/registry/registry.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    BestiaryComponent,
    RacesComponent,
    JobsComponent,
    GuidesComponent,
    AuthorizationComponent,
    RegistryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
