import { useState, useRef, useEffect } from "react";
import { ContainerConteudo } from "./styled";
import Api from "../../service/api";
import LoadingBar from "react-top-loading-bar";
import Menu from "../../componentes/Menu";
import Cabecalho from "../../componentes/Cabecalho";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = new Api();

export default function Conteudo() {
  const [produto, setProduto] = useState([]);
  const [nmProduto, setNmProduto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precoDe, setPrecoDe] = useState("");
  const [precoPor, setPrecoPor] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [estoque, setEstoque] = useState("");
  const [imagem, setImagem] = useState("");
  const [idAlterando, setIdAlterando] = useState(0);
  const loading = useRef(null);

  async function inserirProduto() {
    loading.current.complete();

    if (idAlterando === 0) {
      let r = await api.cadastrarProduto(
        nmProduto,
        categoria,
        precoDe,
        precoPor,
        avaliacao,
        descricao,
        estoque,
        imagem
      );

      if (r.erro) {
        toast.error(r.erro);
      } else {
        toast.success("✔️ Produto inserido com sucesso!");
      }
    } else {
      let r = await api.alteraProduto(
        idAlterando,
        nmProduto,
        categoria,
        precoDe,
        precoPor,
        avaliacao,
        descricao,
        estoque,
        imagem
      );

      if (r.erro) {
        toast.error(r.erro);
      } else {
        toast.success("✔️ Produto alterado com sucesso!");
      }
    }

    listar();
    limparVariavel();
  }

  async function listar() {
    loading.current.complete();
    let a = await api.listarProdutos();
    setProduto(a);
  }

  async function remover(id) {
    loading.current.complete();
    confirmAlert({
      title: "Remover produto",
      message: `Tem certeza que deseja remover o Produto ${id} ?`,
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            let a = await api.removerProduto(id);
            if (a.erro) {
              toast.erro({ erro: a.toString() });
            } else {
              toast.success("✔️Produto removido");
            }
            listar();
          },
        },
        {
          label: "Não",
        },
      ],
    });
  }

  async function editar(item) {
    setNmProduto(item.nm_produto);
    setCategoria(item.ds_categoria);
    setPrecoDe(item.vl_preco_de);
    setPrecoPor(item.vl_preco_por);
    setAvaliacao(item.vl_avaliacao);
    setDescricao(item.ds_produto);
    setEstoque(item.qtd_estoque);
    setImagem(item.img_produto);
    setIdAlterando(item.id_produto);
    console.log(item);
  }

  const limparVariavel = () => {
    setIdAlterando(0);
    setNmProduto("");
    setCategoria("");
    setPrecoDe("");
    setPrecoPor("");
    setAvaliacao("");
    setDescricao("");
    setEstoque("");
    setImagem("");
  };

  useEffect(() => {
    listar();
  }, []);

  return (
    <ContainerConteudo>
      <ToastContainer />
      <LoadingBar color="#2595ff" height='5px' ref={loading} />
    
<Menu></Menu>
      <div class="box-direira">
      <Cabecalho></Cabecalho>
      <div class="barra-botao1"></div>

        <div class="corpo-box-direira">
          <div class="cadastrar-produto">
            <div class="txt-produto">
              <div class="barra-produto"></div>
              <div class="produto">
                {idAlterando === 0 ? "Novo Produto" : `Alterando Produto ${nmProduto}`}
              </div>
            </div>

            <div class="box-inputs">
              <div class="sub-box-inputs">
                <div class="input-item">
                  Nome:
                  <input
                    type="text"
                    value={nmProduto}
                    onChange={(r) => setNmProduto(r.target.value)}
                  />
                </div>
                <div class="input-item">
                Categoria:
                  <input
                    type="text"
                    value={categoria}
                    onChange={(r) => setCategoria(r.target.value)}
                  />
                </div>
                <div class="input-item">
                  Avaliação:
                  <input
                    type="text"
                    value={avaliacao}
                    onChange={(r) => setAvaliacao(r.target.value)}
                  />
                </div>
              </div>

              <div class="sub-box-inputs">
                <div class="input-item">
                  Preço DE:
                  <input
                    type="text"
                    value={precoDe}
                    onChange={(r) => setPrecoDe(r.target.value)}
                  />
                </div>
                <div class="input-item">
                  Preço POR:
                  <input
                    type="text"
                    value={precoPor}
                    onChange={(r) => setPrecoPor(r.target.value)}
                  />
                </div>
                <div class="input-item">
                  Estoque:
                  <input
                    type="text"
                    value={estoque}
                    onChange={(r) => setEstoque(r.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="box-inputs2">
              <div class="sub-box-inputs3">
                <div class="input-item3">
                  Link imagem:
                  <input
                    type="text"
                    value={imagem}
                    onChange={(r) => setImagem(r.target.value)}
                  />
                </div>
                <div class="txt-item3">
                  <div className="txt1">Descrição:</div>
                  <textarea
                    type="text"
                    value={descricao}
                    onChange={(r) => setDescricao(r.target.value)}
                  />
                </div>
              </div>

              <button onClick={inserirProduto}>
                {idAlterando === 0 ? "Cadastrar" : "Alterar"}
              </button>
            </div>
          </div>

          <div class="lista-produtos">
            <div class="txt-produtos">
              <div class="barra-produtos"></div>
              <div class="txt-produtos">Produtos Cadastrados</div>
            </div>

            <table class="tabela-produtos">
              <thead>
                <tr>
                  <th> </th>
                  <th> ID </th>
                  <th> Produto </th>
                  <th> Categoria </th>
                  <th> Preço </th>
                  <th> Estoque </th>
                  <th class="espaco"> </th>
                  <th class="espaco"> </th>
                </tr>
              </thead>
              <tbody>
                {produto.map((item, i) => (
                  <tr className={i % 2 === 0 ? "Linha-alterada" : ""}>
                    <td>
                      <img
                        src={item.img_produto}
                        alt=""
                        style={{ height: "30px", width: "30px" }}
                      />
                    </td>

                    <td> {item.id_produto} </td>
                    <td title={item.nm_produto}>
                      <td>
                        
                        {item.nm_produto != null && item.nm_produto.length >= 25
                          ? item.nm_produto.substr(0, 25) + "..."
                          : item.nm_produto}
                      </td>
                    </td>
                    <td> {item.ds_categoria} </td>
                    <td> {item.vl_preco_por} </td>
                    <td> {item.qtd_estoque} </td>

                    <td class="espaco">
                      <button onClick={() => editar(item)}>
                        <img src="/assets/imagens/edit.svg" alt="" />
                      </button>
                    </td>

                    <td class="espaco">
                      <button onClick={() => remover(item.id_produto)}>
                        <img src="/assets/imagens/trash-2.svg" alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ContainerConteudo>
  );
}
