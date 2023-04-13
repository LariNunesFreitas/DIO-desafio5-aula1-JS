/* Desconto em loja

1 Débito = - 10%;
2 Dinheiro/Pix = - 15%;
3 Crédito até 2x = sem juros e sem desconto;
4 Crédito + 2x = +10%
*/

const precoEtiqueta = 100.00;
const formaDePagamento = 4;

if (formaDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}else if (formaDePagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3){
    console.log(precoEtiqueta);
} else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
