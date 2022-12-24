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
      description: 'Group project for cs262.',
      link: 'https://github.com/calvin-cs262-fall2020-teamD/freetime-project',
    },
    {
      title: '4x4 Tic-Tac-Toe',
      description: 'Final group project for cs336.',
      link: 'https://github.com/cs336-tic-tac-toe/tic-tac-toe',
    },
    {
      title: 'Reliable Calvin Message Protocol',
      description: 'Reliable message transfer over UDP.',
      link: 'https://github.com/Caleb-Hurshman/RCMP',
    },
  ];
}

interface ProjectData {
  title: string;
  description: string;
  link?: string;
}
