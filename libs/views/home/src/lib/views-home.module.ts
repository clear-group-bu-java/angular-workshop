import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),

    HomeModule,
  ],
})
export class ViewsHomeModule {}
