/* eslint-disable */
function semRetorno(...args: string[]): void {
    console.log(args.join(''));
}

const pessoa = {
    nome: 'rakel',
    sobrenome: 'Moreira',

    exibirNome(): void {
        console.log(this.nome + '' + this.sobrenome);

    },
};

semRetorno('Rakel', 'Moreira');
pessoa.exibirNome();
export { pessoa };
