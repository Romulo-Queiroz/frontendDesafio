import { Component } from '@angular/core';
import { ListLancamentoService } from './Services/list-lancamento.service';
import { LancamentoModel } from './Models/lancamento.model';	
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateLancamentoComponentComponent } from './create-lancamento-component/create-lancamento-component.component';
import { CancelLancamentoService } from './Services/cancel-lancamento.service';
import { CreateUpdateLancamentoService } from './Services/create-update-lancamento.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'frontend';
  lancamentos: LancamentoModel[] = [];
  lancamentoId!: number;
  totalValor!: number;
  filtroData: string = '';

  constructor(
    private listLancamentoService: ListLancamentoService,
    private modalService: NgbModal,
    private cancelLancamentoService: CancelLancamentoService,
    private createUpdateLancamentoService: CreateUpdateLancamentoService
  ) {}

  ngOnInit() {
    if (this.lancamentos.length === 0) {
      this.listLancamentoService.listLancamento().subscribe((data: any) => {
        if (data && data.lancamentos && Array.isArray(data.lancamentos)) {
          this.lancamentos = data.lancamentos;
          this.totalValor = this.lancamentos.reduce((total, lancamento) => total + lancamento.valor, 0);
          console.log("total valor: " + this.totalValor);
        } else {
          console.error('Formato de resposta inválido');
        }
      });
    }


  }

  openCreateLancamentoModal() {
    const modalRef = this.modalService.open(CreateLancamentoComponentComponent);
  }

  openCreateUpdateLancamentoModal(lancamentoId: number) {
    const modalRef = this.modalService.open(CreateLancamentoComponentComponent);
    modalRef.componentInstance.lancamentoId = lancamentoId;
  }

  cancelarLancamento(lancamentoId: number) {
    this.cancelLancamentoService.cancelarLancamento(lancamentoId).subscribe(() => {
      window.location.reload();
    });
  }

 
  getStatusColor(status: string): string {
    if (status === 'Válido') {
      return 'rgb(142, 224, 142)';
    } else if (status === 'Cancelado') {
      return 'rgb(243, 156, 156)'; 
    } else {
      return 'rgb(142, 224, 142)';
    }
  }

  limparDescricao(descricao: string): string {
    return descricao.replace(/[^a-zA-Z0-9]/g, ' ');
  }

  verificarFiltroData(dataLancamento: string | undefined): boolean {
    if (!dataLancamento || !this.filtroData) {
      return true;
    }
  
    const dataLancamentoSemHora = dataLancamento.split('T')[0];
    const filtroDataSemHora = this.filtroData.split('T')[0]; 
  
    return dataLancamentoSemHora === filtroDataSemHora;
  }
  
}
