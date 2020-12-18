import { CoreModule } from '@alten/core';
import { PeopleDataAddressModule } from '@alten/people/data/address';
import { PeopleDataPersonModule } from '@alten/people/data/person';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PerformanceDemoComponent } from './performance-demo/performance-demo.component';
import { PerformanceDemoModule } from './performance-demo/performance-demo.module';

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
  { path: 'performance', component: PerformanceDemoComponent },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'corrected',
      preloadingStrategy: PreloadAllModules,
    }),

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
    PeopleDataPersonModule,
    PerformanceDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
