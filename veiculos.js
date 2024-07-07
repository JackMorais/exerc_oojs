function Veiculos(nome, tipo, valor){
    this.nome = nome;
    this.tipo = tipo;
    let _valor = valor;

    this.getValor = function(){
        return _valor;
    }
    
    this.setValor = function(preco){
        if (typeof valor === 'number'){
            _valor = preco;
        }
    }
}

function carroEletrico(nome){
    Veiculos.call(this, nome, "carroEletrico", 100000);

    this.aumento = function(){
        const novoPreco = this.getValor() * 1.10;
        this.setValor(novoPreco);
    }
}

function carroHibrido(nome){
    Veiculos.call(this, nome, "carroHibrido", 200000);

    this.aumento = function(){
        const novoPreco = this.getValor() * 1.20;
        this.setValor(novoPreco);
    }
}

function carroCombustao(nome){
    Veiculos.call(this, nome, "carroCombustao", 50000);

    this.aumento = function(){
        const novoPreco = this.getValor() * 1.20;
        this.setValor(novoPreco);
    }
}


const carro1 = new carroEletrico("dolphin");  
const carro2 = new carroHibrido("Audia3");  
const carro3 = new carroCombustao("hb20");



carro1.aumento();
console.log(carro1.getValor())

carro2.aumento();
console.log(carro2.getValor())

carro3.aumento();
console.log(carro3.getValor())


