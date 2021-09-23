import axios from 'axios'
const api = axios.create({
    baseURL: 'https://apidevstore.herokuapp.com'
})

export default class Api {
    async listarProdutos() {
        let r = await api.get(`/produto/`);
        return r.data;
    }
    async cadastrarProduto(nomeProduto, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem) {
        let cadastroJson = {
            nomeProduto: nomeProduto,
            categoria: categoria,
            precoDe: precoDe,
            precoPor: precoPor,
            avaliacao: avaliacao,
            descricao: descricao,
            estoque: estoque,
            imagem: imagem
        }

        let r = await api.post(`/produto`, cadastroJson );
        return r.data
    }

    async removerProduto(id) {
        let remover = await api.delete(`/produto/` + id);
        return remover.data;
    }

   
    async alteraProduto(id, nmproduto,categoria,precoDe,precoPor,avaliacao,descricao,estoque,imagem ) {
        let r = await api.put(`/produto/` + id, {nmproduto,categoria,precoDe,precoPor,avaliacao,descricao,estoque,imagem});
        return r.data;
    }
}