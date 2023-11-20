export class LancamentoModel {
    id: number;
    descricao: string;
    valor: number;
    data?: string;
    avulso: boolean;
    status: string;
  
    constructor() {
      this.id = 0;
      this.descricao = '';
      this.valor = 0;
      this.data = Date.now().toString();
      this.avulso = false;
      this.status = '';
    }
  }