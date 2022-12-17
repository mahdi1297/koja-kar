import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Params } from '@angular/router';
import { Job } from '@dev/domain';
import { SendResumeButtoMSheetComponent } from '../../../shared/components/send-resume-bottonsheet/send-resume-bottomheet.component';
import { JobService } from '../../../core/services/job.service';

@Component({
  selector: 'dev-jobs-list-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class JobsListDetailComponent implements OnInit {
  job: Job;
  isLoading = false;

  constructor(
    private _route: ActivatedRoute,
    private _jobService: JobService,
    private __bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    this._route.queryParams.subscribe((params: Params) => {
      const { item } = params;

      if (!item) {
        return;
      }

      this.startLoading();

      this.getJobDetail(item);

      setTimeout(() => {
        this.stopLoading();
      }, 700);
    });
  }

  getJobDetail(jobId: string) {
    this._jobService.getJobDetail(jobId).subscribe((data) => {
      this.job = data.data;
    });
  }

  stopLoading() {
    this.isLoading = false;
  }

  startLoading() {
    this.isLoading = true;
  }

  sendResumeBottomSheet() {
    this.__bottomSheet.open(SendResumeButtoMSheetComponent);
  }
}
