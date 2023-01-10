import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatrialModule } from '../matrial/matrial.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [HomeComponent, Page1Component, Page2Component, Page3Component, HomePageComponent],
  imports: [CommonModule, MatrialModule, RouterModule],
  exports: [HomeComponent, Page1Component],
})
export class EventModule {}
