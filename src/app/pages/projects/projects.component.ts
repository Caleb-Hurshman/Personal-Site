import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: ProjectData[] = [
    {
      title: 'FreeTime',
      description:
        'The FreeTime app allows users to input their free time for the week, form groups with other users, \
        and computes overlapping free time for a group. Built using JavaScript, HTML, CSS, React Native, a \
        PostgreSQL database, and Heroku.',
      link: 'https://github.com/calvin-cs262-fall2020-teamD/freetime-project',
    },
    {
      title: '4x4 Tic-Tac-Toe',
      description:
        'Online multiplayer 4x4 tic-tac-toe web app. \
        Full authentication and authorization for users, along with profile customization \
        and stat tracking. Built using TypeScript, HTML, SCSS, Angular, and Google Firestore/Firebase.',
      link: 'https://github.com/cs336-tic-tac-toe/tic-tac-toe',
    },
    {
      title: 'Reliable Calvin Message Protocol',
      description:
        'Implementation of the RCMP file transfer protocol over UDP. The protocol includes \
        adaptive (slow start) acknowledgement packets, timeouts, and retransmission to ensure \
        reliable file transfer over an unreliable network. Built in Python.',
      link: 'https://github.com/Caleb-Hurshman/RCMP',
    },
    {
      title: 'Mastermind',
      description:
        'Re-creation of the board game Mastermind. The player has ten chances to guess a secret sequence \
        of colors that is randomly determined by the "Mastermind". Built using Python and Tkinter GUI library.',
      link: 'https://github.com/Caleb-Hurshman/mastermind',
    },
  ];

  onGitHubLinkClick(link: string) {
    window.open(link);
  }
}

interface ProjectData {
  title: string;
  description: string;
  link?: string;
}
