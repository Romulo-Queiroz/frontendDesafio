import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateUpdateLancamentoService } from '../Services/create-update-lancamento.service';
import { LancamentoModel } from '../Models/lancamento.model';

@Component({
  selector: 'app-create-lancamento-component',
  templateUrl: './create-lancamento-component.component.html',
  styleUrls: ['./create-lancamento-component.component.css']
})


export class CreateLancamentoComponentComponent {

  lancamentoForm: FormGroup;
  lancamentoId!: number;

  constructor(private modalService: NgbModal, 
    private formBuilder: FormBuilder,
    private createUpdateLancamentoService: CreateUpdateLancamentoService) { 
    this.lancamentoForm = this.formBuilder.group({
      descricao: ['', Validators.required],
      valor: [0, Validators.required],
      data: ['', Validators.required],
      avulso: [false],
      tipo: ['', Validators.required],
      status: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  fecharModal() {
    this.modalService.dismissAll();
  }

  createLancamento() {
    const newLancamento: LancamentoModel = {
      id: 0,
      descricao: this.lancamentoForm.get('descricao')?.value,
      valor: this.lancamentoForm.get('valor')?.value,
      avulso: this.lancamentoForm.get('avulso')?.value,
      status: this.lancamentoForm.get('status')?.value
    };
  
    this.createUpdateLancamentoService.createLancamento(newLancamento).subscribe(
      (Response) => {
        this.fecharModal();
        window.location.reload();
      }
    );
  }

  updateLancamento(lancamentoId: number) {
    const newLancamento: LancamentoModel = {
      id: 0,
      descricao: this.lancamentoForm.get('descricao')?.value,
      valor: this.lancamentoForm.get('valor')?.value,
      data: this.lancamentoForm.get('data')?.value,
      avulso: this.lancamentoForm.get('avulso')?.value,
      status: this.lancamentoForm.get('status')?.value
    };
  
    this.createUpdateLancamentoService.updateLancamento(newLancamento, lancamentoId).subscribe(
      (Response) => {
        this.fecharModal();
        window.location.reload();
      }
    );
  }
  
}
