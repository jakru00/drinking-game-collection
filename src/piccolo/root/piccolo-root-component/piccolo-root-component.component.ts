import { Component } from '@angular/core';
import { StartPageComponent } from '../../features/start-page/start-page/start-page.component';

@Component({
  selector: 'app-piccolo-root-component',
  standalone: true,
  imports: [StartPageComponent],
  templateUrl: './piccolo-root-component.component.html',
})
export class PiccoloRootComponentComponent {

}
