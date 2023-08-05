//
// Miniloja Virutal
//

//Cadastro dos itens
const itens = [
    {
        id: 0,
        nome: 'Camiseta',
        img: 'image.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Bermuda',
        img: 'image.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Tênis',
        img: 'image.jpg',
        quantidade: 0
    },
]

//Mostrar os itens na vitrine
iniicalizarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    itens.map((val) => {
        containerProdutos.innerHTML += `
        <div class="produto-single">
            <img src="`+val.img+`" />
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao carrinho</a>
        `
    })
}

iniicalizarLoja();

//Atualizar o carrinho
atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    itens.map((val) => {
        if(val.quantidade > 0) {
            containerCarrinho.innerHTML += `
            <br>
            <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
            <br>
            `
        }
    })
}

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(){
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}