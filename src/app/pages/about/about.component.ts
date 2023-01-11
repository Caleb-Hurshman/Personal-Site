import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  workExperiences: WorkExperience[] = [
    {
      title: 'Software Engineer Intern',
      dateRange: '05/2022 - 08/2022',
      employer: 'Maestro',
      location: 'Kalamazoo, MI',
      supervisor: 'John Pinkster',
      description: [
        'Created both internal and customer-facing software as a full-stack developer',
        'Developed an event calendar feature from the ground up in 6 weeks',
      ],
    },
    {
      title: 'Software Engineering Grader',
      dateRange: '09/2021 - 12/2021',
      employer: 'Calvin University',
      location: 'Grand Rapids, MI',
      supervisor: 'Keith VanderLinden',
      description: [
        'Communicated with the professor to understand how to grade each assignment',
        'Balanced professor’s instructions and assignment details to make judgement calls in uncertain cases',
        'Graded weekly assignments promptly after the due date in under 3 hours',
      ],
    },
    {
      title: 'Landscape Gardener',
      dateRange: '05/2021 - 08/2021',
      employer: 'Just Weed It LLC',
      location: 'Ann Arbor, MI',
      description: [
        'Performed light landscaping jobs efficiently while recording time and taking inventory of materials used',
        'Collaborated with clients to perform the desired service within the alotted time',
      ],
    },
    {
      title: 'CS Lab Monitor',
      dateRange: '02/2021 - 05/2021',
      employer: 'Calvin University',
      location: 'Grand Rapids, MI',
      description: [
        'Advised and guided students in a wide range of assignments for introductory computer science classes',
        'Worked without supervision to address all student questions in an efficient and thorough manner',
      ],
    },
    {
      title: `Teacher's Assisstant`,
      dateRange: '09/2020 - 12/2020',
      employer: 'Calvin University',
      location: 'Grand Rapids, MI',
      supervisor: 'Derek Schuurman',
      description: [
        'Guided and encouraged students in an introductory computer science course',
        `Collaborated with a supervisor to ensure all students' questions were answered promptly and clearly`,
      ],
    },
  ];
}

interface WorkExperience {
  title: string;
  dateRange: string;
  employer: string;
  location: string;
  supervisor?: string;
  description: string[];
}
