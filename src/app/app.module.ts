import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { RoutesModule } from './routes/routes.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule,
    RoutesModule,
    RouterModule.forRoot([], {
      preloadingStrategy: PreloadAllModules,
      useHash: false,
      scrollPositionRestoration: 'top'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
