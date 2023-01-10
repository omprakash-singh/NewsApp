import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventModule } from './event/event.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrialModule } from './matrial/matrial.module';
import { Page1Component } from './event/page1/page1.component';
import { Page2Component } from './event/page2/page2.component';
import { Page3Component } from './event/page3/page3.component';
import { HomePageComponent } from './event/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'india',
    component: Page1Component,
  },
  {
    path: 'TCS',
    component: Page2Component,
  },
  {
    path: 'Tesla',
    component: Page3Component,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    EventModule,
    BrowserAnimationsModule,
    MatrialModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
