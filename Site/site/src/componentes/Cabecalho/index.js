import { Cabecalhocss } from "./styled"

export default function Cabecalho(){
    return(
<Cabecalhocss>       
    <div class="usuario">
          <div>
            <img src="/assets/imagens/imgmat.png" alt="" />
            <div class="divDentroIMG">3</div>
          </div>
          <div>
            Olá, <span>Matheus Oliveira</span>
          </div>
        </div>
        <div class="botoes1">
          <button>
            <img src="/assets/imagens/atualizar.svg" alt="" />
          </button>
          <button>
            <img src="/assets/imagens/log-out.svg" alt="" />
          </button>
        </div>
      </Cabecalhocss> 

        )
}


