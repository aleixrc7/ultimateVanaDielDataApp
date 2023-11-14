import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HistoryComponent } from './components/history/history.component';
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
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
