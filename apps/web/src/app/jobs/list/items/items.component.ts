import { Component, Input } from '@angular/core';
import { Job } from '@dev/domain';

@Component({
  selector: 'dev-jobs-list-item',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class JobsListItemComponent {
  @Input() jobListData: Job[];
}
