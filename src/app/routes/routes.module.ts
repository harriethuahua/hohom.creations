import { ArtworksComponent } from 'src/app/routes/artworks/artworks.component';
import { HomeComponent } from 'src/app/routes/home/home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CustomizeComponent } from './customize/customize.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'artworks',
    component: ArtworksComponent
  },
  {
    path: 'customize',
    component: CustomizeComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
    ArtworksComponent,
    CustomizeComponent
  ]
})

export class RoutesModule {}
