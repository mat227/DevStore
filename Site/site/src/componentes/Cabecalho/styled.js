import styled from "styled-components";


const Cabecalhocss=styled.div`
 
    display: flex;
    flex-direction: row;
  
    padding: 1em 2.8em;
  
    justify-content: space-between;

  
  .divDentroIMG {
    display: flex;
    flex-direction: column;
    position: absolute;
    border: 3px solid white;
    background-color: #119FDC;
    color: white;
  
    width: 20px;
    height: 20px;
  
    border-radius: 50%;
  
    justify-content: center;
    text-align: center;
  
    font-size: 10px;
    font-weight: bolder;
  
    left: 43em;
    top: 1.5em;
  }
  
  .usuario {
    display: flex;
    flex-direction: row;
  
    align-items: center;
  
    font-family: "Roboto";
    color: #615858;
    font-size: 1em;
    font-weight: 500;
  }
  
  .usuario img {
    border-radius: 50%;
    width: 57px;
    height: 57px;
  }
  
  .usuario div {
    margin-left: 1em;
  }
  
  .usuario span {
    font-weight: 700;
  }
  
  .botoes1 {
    display: flex;
    flex-direction: row;
  
    align-items: center;
  }
  
  .botoes1 button {
    border: none;
    background: #119FDC;
    cursor: pointer;
  
    padding: 0.5em;
    border-radius: 50%;
  
    margin: 0px 0.3em;
  }
  
 

`

export {Cabecalhocss}