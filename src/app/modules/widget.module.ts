import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetService } from './../services/widget/widget.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MaterialModule} from "./material.module";
import {SpinnerModule} from "../components/shared/spinner/spinner.module";
import { PropertyDetailsComponent } from '../components/core/dashboard/property/property-details/property-details.component';

@NgModule({
  imports: [
    CommonModule, 
    MaterialModule, 
    ReactiveFormsModule, 
    FormsModule,
    SpinnerModule
  ],
  declarations: [
  PropertyDetailsComponent
    
  ],
  exports: [
  PropertyDetailsComponent
   
  ],
  entryComponents: [
  PropertyDetailsComponent
   
  ],
  providers: [WidgetService]
})
export class WidgetModule {}
