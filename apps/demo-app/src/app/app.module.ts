import { CoreModule } from '@alten/core';
import { PeopleDataAddressModule } from '@alten/people/data/address';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('@alten/views/home').then((m) => m.ViewsHomeModule),
  },
  {
    path: 'addresses',
    loadChildren: () =>
      import('@alten/people/views/address').then(
        (m) => m.PeopleViewsAddressModule
      ),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'corrected',
      preloadingStrategy: PreloadAllModules,
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),

    CoreModule.forRoot({
      environment,
    }),

    MatButtonModule,
    MatIconModule,
    MatToolbarModule,

    PeopleDataAddressModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
