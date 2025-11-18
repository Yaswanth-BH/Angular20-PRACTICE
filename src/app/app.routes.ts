import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './components/att-directive/att-directive';
import { ComponentLifePipes } from './components/component-life-pipes/component-life-pipes';
import { GetApi } from './components/get-api/get-api';

export const routes: Routes = [
    { path: 'admin', component: Admin },
    { path: 'user', component: User },
    { path: 'control-flow-statements', component: ControlFlow },
    { path: 'data-binding', component: DataBinding },
    { path: 'signal', component: SignalEx },
    { path: 'attribute-directive', component: AttDirective },
    { path: 'component-lifecycle-pipes', component: ComponentLifePipes },
    { path: 'get-api', component: GetApi },


];
