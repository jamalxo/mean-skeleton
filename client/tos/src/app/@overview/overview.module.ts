import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { RoutingCardComponent } from './routing-card/routing-card.component';



@NgModule({
  declarations: [OverviewComponent, RoutingCardComponent],
  imports: [
    CommonModule
  ]
})
export class OverviewModule { }
