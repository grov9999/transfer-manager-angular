import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateTransferComponent } from './pages/create-transfer/create-transfer.component';
import { ModalApproveComponent } from './pages/modal-approve/modal-approve.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create', component: CreateTransferComponent},
    {path: 'aprobar', component: ModalApproveComponent},
    
];
