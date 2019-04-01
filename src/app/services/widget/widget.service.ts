import { Injectable, Type } from '@angular/core';
import { PropertyDetailsComponent } from '../../components/core/dashboard/property/property-details/property-details.component';


@Injectable()
export class WidgetService {
	widgets: { [id: string]: Type<{}> } = {
		'app-property-details':PropertyDetailsComponent,
		
	};
}
