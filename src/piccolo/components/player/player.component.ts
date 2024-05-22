import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  players: string[];

  constructor(readonly userService: UserService) {
    this.players = userService.getPlayers();
  }

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

  clearPlayers(): void {
    this.players = [];
  }

  submitPlayers(): void {
    this.userService.registerPlayers(this.players);
  }
}