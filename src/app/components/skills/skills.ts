import { Component } from '@angular/core';
import { NgForOf } from '@angular/common'; // Import NgForOf

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'] // <-- fixed
})
export class Skills {
  skillCategories = [
    {
      title: 'Frontend',
      skills: ['Angular', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Backend',
      skills: ['Node.js', '.NET Core']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'SQL']
    },
    {
      title: 'Others / Tools',
      skills: ['Git', 'GitHub', 'VS Code']
    }
  ];
}
