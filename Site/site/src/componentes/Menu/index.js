import { Menucss } from "./styled"


export default function  Menu(){
    return(
      <Menucss>
        <header class="header-lateralEsquerda">
          <div class="img-livro">
            <img src="/assets/imagens/logo.svg" alt="" />
          </div>
          <div class="DevStore">
          <font color="#10EAEA"> Dev </font> Store
          </div>
        </header>
        <div class="blocoPreto"></div>
        <div class="lateralEsquerda-gerente">
          <div> Gerenciamento </div>
          <img src="/assets/imagens/setaparabaixo.svg" alt="" />
        </div>
        <div class="lateralEsquerda-produto">
          <div> Produtos </div>
        </div>
        </Menucss>
    )
}


