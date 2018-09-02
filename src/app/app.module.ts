import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TaskService } from './services/task.service';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MastHeaderComponent } from './common/mast-header/mast-header.component';
import { MastFooterComponent } from './common/mast-footer/mast-footer.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskFormComponent } from './task-manager/task-form/task-form.component';
import { TaskListComponent } from './task-manager/task-list/task-list.component';
import { TaskItemComponent } from './task-manager/task-list/task-item/task-item.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { TaskDetailsComponent } from './task-manager/task-details/task-details.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { TaskCompletedDirective } from './directives/task-completed.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { CustumDirectiveDirective } from './directives/custum-directive.directive';
import { AuthGuard } from './common/auth.guard';

const routes : Routes = [
  { path : '', redirectTo : '/login', pathMatch : 'full'},
  { path : 'login', component : LoginFormComponent},
  { path : 'register', component : RegisterFormComponent},
  { path : 'tasks', component : TaskManagerComponent, canActivate : [AuthGuard]},
  { path : 'tasks/details/:id' , component : TaskDetailsComponent, canActivate : [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    LoginFormComponent,
    MastHeaderComponent,
    MastFooterComponent,
    RegisterFormComponent,
    TaskManagerComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskDetailsComponent,
    MyUpperCasePipe,
    SearchPipe,
    TaskCompletedDirective,
    HighlightDirective,
    CustumDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TaskService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
