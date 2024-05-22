import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  players: string[] = [];
  
  getPlayers(): string[] {
    return this.players;
  }
  
  registerPlayers(players: string[]): void {
    this.players = players;
  }
}
