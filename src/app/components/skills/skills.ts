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
  // In your component.ts file
ngOnInit() {
  console.log('Current theme:', document.body.getAttribute('data-theme'));
  console.log('Is dark mode?', document.body.hasAttribute('data-theme="dark"'));
  }
  
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
