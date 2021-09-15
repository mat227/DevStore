import styled from 'styled-components'


const ContainerConteudo = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
  
* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0em;
  }
  
  
  .box-direira {
    display: flex;
    flex-direction: column;
  
    background-color: white;
  
    min-height: 100vh;
    width: 100%;
  }
  
  .barra-botao1 {
    border: 1px solid #d9d9d9;
    align-self: center;
  
    width: 95%;
  }

  
  .corpo-box-direira {
    display: flex;
    flex-direction: column;
  
    background-color: #f5f5f5;
    
    height: 100%;
    padding: 2em;
  }
  
  .cadastrar-produto {
    display: flex;
    flex-direction: column;
  
    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
  
    padding: 2em 2em 2em 5em;
  }
  
  .txt-produto {
    display: flex;
    flex-direction: row;
  }
  
  .barra-produto {
    border: 4px solid #119FDC;
  
    border-radius: 2.6em;
  }
  
  .produto {
    font-size: 2em;
    font-weight: 700;
    font-family: "Roboto";
    color: #3c3939;
  
    margin-left: 0.5em;
  }
  
  .box-inputs {
    display: flex;
    flex-direction: row;
  
    margin-top: 2em;
  }
  
  .sub-box-inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .input-item {
    display: flex;
    flex-direction: row;
  
    align-items: center;
  
    font-family: "Roboto";
    color: #615858;
    font-weight: 500;
    font-size: 1.12em;
  }
  
  .input-item input {
    width: 13.06em;
    border: 1px solid #a8a8a8;
    background: #fff;
    height: 2.5em;
  
    border-radius: 5px;
    margin-right: 7em;
    margin-left: 1em;
    margin: 0.5em 7em 0.5em 1em;
  
    outline: none;
    font-family: "Roboto";
  }


  .input-item3 {
    display: flex;
    flex-direction: row;
  margin-left: -1.1em;
    align-items: center;
    font-family: "Roboto";
    color: #615858;
    font-weight: 500;
    font-size: 1.12em;
  }
  .txt-item3 {
    display: flex;
    flex-direction: row;
  
    font-family: "Roboto";
    color: #615858;
    font-weight: 500;
    font-size: 1.12em;
  }
  
  .input-item3 input {
    width: 41em;
    border: 1px solid #a8a8a8;
    background: #fff;
    height: 2.5em;
    align-items: flex-end;
    border-radius: 5px;
    margin-left: 1em;
    
    outline: none;
    font-family: "Roboto";
  }
  .txt1{
margin-top: 10px;
  }
  .txt-item3 textarea {
    width: 41.4em;
    border: 1px solid #a8a8a8;
    background: #fff;
    height: 10em;
    align-items: flex-start;
    border-radius: 5px;
    margin: 0.5em 4em 0.5em 1em;
    resize: none;
  
    outline: none;
    font-family: "Roboto";
  }
  .box-inputs2 {
    display: flex;
    flex-direction: row;
  }
  
  .box-inputs2 button {
    align-self: flex-end;
    background-color: #119FDC;
    border: none;
  
    color: white;
    font-weight: 700;
    font-family: "Roboto";
  
    height: 2.4em;
    width: 6.62em;
    border-radius: 44px;
  
    cursor: pointer;
  }
  
  .lista-produtos {
    display: flex;
    flex-direction: column;
  
    background-color: #fff;
  
    margin: 2em 0em;
    padding: 3.4em 2em 3.4em 2em;
  
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
  }
  
  .txt-produtos {
    display: flex;
    flex-direction: row;
  
    font-family: "Roboto";
  
    font-size: 1.5em;
    font-weight: 700;
    color: black;
  }
  
  .Linha-alterada{
    background-color: #f5f5f5;
  }
  .barra-produtos {
    border: 4px solid #119FDC;
  
    border-radius: 2.6em;
    margin-right: 0.5em;
  }
  
  .table-students {
    border-collapse: collapse;
  }
  
  .table-reader {
    background-color: #119FDC;
    color: white;
  
    width: auto;
    text-align: center;
  }
  
  td button {
    border-radius: 50%;
    background-color: #565656;
    border: none;
    width: 2.4em;
    height: 2.4em;
  }
  
  .box-image {
    margin-right: 2em;
  }
  
  thead {
    background-color: #10EAEA;
    font-family: "Roboto";
    font-size: 1.12em;
    font-weight: 700;
  }
  
  table {
    margin-top: 2em;
  }
  
  tbody {
    background-color: #f5f5f5;
  }
  

  td {
    text-align: left;
    height: 61.93px;
    padding: 0.5em;
    color: #6d6868;
    font-weight: 600;
    font-family: "Roboto";
    font-size: 1.12em;
  }
  
  .white {
    background-color: #fff;
  }
  
  th {
    height: 61.93px;
    text-align: left;
    padding: 1em;
    color: #ffff;
    font-weight: 800;
  }
  .tabela-produtos {
    border-collapse: collapse;
  }
  .info {
    background-color: #fff;
  }
  
  
.espaco {
  width: 0.1em;
}
.espaco > button{
  visibility: hidden;
}

tr:hover{

  .espaco > button{
  visibility: visible;
}

}

  
`

export { ContainerConteudo };