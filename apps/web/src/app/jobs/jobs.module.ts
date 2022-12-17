import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobRoutingModule } from './job-routing.module';
import { JobsSearchComponent } from './search/search.component';
import { JobsListComponent } from './list/list.component';
import { JobsListDetailComponent } from './list/details/detail.component';
import { JobsListItemComponent } from './list/items/items.component';
import { SafeHtml } from '../core/pipes/safehtml.pipe';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonLoaderComponent } from '../shared/components/skeleton-loader/skeleton-loader.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    JobsComponent,
    JobsListItemComponent,
    JobsSearchComponent,
    JobsListComponent,
    JobsListDetailComponent,
    SafeHtml,
    SkeletonLoaderComponent,
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    SharedModule,
    NgxSkeletonLoaderModule,
  ],
})
export class JobsModule {}
