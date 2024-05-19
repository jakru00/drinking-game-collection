import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [RouterModule, MatIconModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  players: string[] = [];

  addPlayer(input: HTMLInputElement): void {
    if(input.value !== '') {
      this.players.push(input.value);
      input.value = '';
      input.blur();
    }
  }

  removePlayer(index: number): void {
    this.players = this.players.filter((_, currentIndex) => currentIndex !== index);
  }
}