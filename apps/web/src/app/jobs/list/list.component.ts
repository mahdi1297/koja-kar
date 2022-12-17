import { Component, OnInit } from '@angular/core';
import { Job } from '@dev/domain';
import { JobService } from '../../core/services/job.service';

@Component({
  selector: 'dev-jobs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class JobsListComponent implements OnInit {
  jobListData: Job[];

  constructor(private _jobService: JobService) {}

  ngOnInit(): void {
    this.getJobList();
  }

  getJobList() {
    this._jobService.getJobList().subscribe({
      next: (data: any) => {
        this.jobListData = data.data;
      },
      error: () => {
        console.log('error');
      },
    });
  }
}
