import {MatTabsModule} from '@angular/material/tabs';
import {NgModule} from "@angular/core";
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    MatTabsModule,
    MatListModule
  ],
  exports: [
    MatTabsModule,
    MatListModule
  ]
})
export class MaterialModule {
}

