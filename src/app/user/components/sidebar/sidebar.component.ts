import { Component, Input, OnInit , EventEmitter, Output} from '@angular/core';
import { Section } from '../../models/section.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sections: Array<Section> = [];
  @Output() onselected: EventEmitter<Section> = new EventEmitter<Section>();

  constructor() { }

  ngOnInit(): void {
  }

  selectSection(section: Section, event: Event){
    event.preventDefault();
    this.onselected.emit(section);
  }

}
