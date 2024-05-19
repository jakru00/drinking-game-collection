import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StartPageComponent } from '../../features/start-page/components/start-page/start-page.component';


@Component({
  selector: 'app-piccolo-root-component',
  standalone: true,
  imports: [StartPageComponent],
  templateUrl: './piccolo-root.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PiccoloRootComponentComponent {

}
