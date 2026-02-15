import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './notfound.html',
  styleUrls: ['./notfound.css']
})
export class Notfound {}
