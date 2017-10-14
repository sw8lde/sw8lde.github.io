import { Component } from '@angular/core';

interface IProject {
  title: string;
  languages: string;
  desc: string;
  code: string;
  link?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects: IProject[] = [
    {
      title: 'FPL Analyzer',
      languages: 'Angular, AngularJS',
      desc: 'A web app to view statistics on Fantasy Premier League players. ' +
        'Made with Angular and an AngularJS branch.',
      code: '/FPL-Analyzer',
      link: 'https://sw8lde.github.io/FPL-Analyzer/'
    },
    {
      title: 'Battleship',
      languages: 'C',
      desc: 'The classic game of Battleship written in C for ECE 210. ' +
        'Played using 2 Bucky Boards over Wi-Fi.',
      code: '/Battleship'
    },
    {
      title: 'Zero Percent',
      languages: 'Android',
      desc: 'An Android app that sends a text with your location to selected ' +
        'contacts right before your phone dies.',
      code: '/Zero-Percent'
    },
    {
      title: 'GroupMe Bot',
      languages: 'Node.js',
      desc: 'An example GroupMe bot written in Node.js. It can reply to ' +
        'specific messages, mention everyone in the group, post gifs based on ' +
        'search terms, and post statistics on the group or users.',
      code: '/GroupMe-Bot'
    },
    {
      title: 'Ti-84 Programs',
      languages: 'TI-BASIC',
      desc: 'Calculator programs for TI-84 written in TIBASIC. Includes some ' +
        'games, a triangle solver, and some other programs.',
      code: '/Calulator-Programs'
    },
  ]
}
