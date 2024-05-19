import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'piccolo-start-page',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPageComponent {

}
