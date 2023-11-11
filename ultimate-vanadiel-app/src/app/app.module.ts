import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { BestiaryComponent } from './bestiary/bestiary.component';
import { RacesComponent } from './races/races.component';
import { JobsComponent } from './jobs/jobs.component';
import { GuidesComponent } from './guides/guides.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistryComponent } from './registry/registry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    BestiaryComponent,
    RacesComponent,
    JobsComponent,
    GuidesComponent,
    AuthorizationComponent,
    RegistryComponent
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
