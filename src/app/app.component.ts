import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class App {
  name = 'Myles Biss';
  bio = 'QA engineer & Game Developer. Into CI/CD, Automation, and Storytelling.';
  links = [
    { label: 'GitHub', url: 'https://github.com/Mybiss55' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/myles-biss-28650024b/' },
    { label: 'Email', url: 'mailto:mylesbiss@outlook.com' }
  ];
skills = [
  'QA Engineering',
  'Jenkins',
  'Mocha (JavaScript Framework)',
  'Agile Methodologies',
  'Selenium',
  'Selenium Grid',
  'CI/CD',
  'Style Sheets',
  'Testing',
  'Quality Assurance',
  'QA Automation',
  'Test Automation',
  'Selenium Testing',
  'Gerrit',
  'Git',
  'Chai',
  'JavaScript',
  'HTML',
  'Cascading Style Sheets (CSS)',
  'Docker Compose',
  'Docker',
  'Godot Engine',
  'Unity',
  'Unreal Engine',
  'Game Development',
  'Game Design',
];
}