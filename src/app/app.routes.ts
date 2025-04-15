import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateTransferComponent } from './pages/create-transfer/create-transfer.component';
import { ModalApproveComponent } from './pages/modal-approve/modal-approve.component';
import { ModalDetailComponent } from './pages/modal-detail/modal-detail.component';
import { ModalRejectComponent } from './pages/modal-reject/modal-reject.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create', component: CreateTransferComponent},
    {path: 'aprobar', component: ModalApproveComponent},
    {path: 'reject', component: ModalRejectComponent},
    {path: 'detail', component: ModalDetailComponent},
];
