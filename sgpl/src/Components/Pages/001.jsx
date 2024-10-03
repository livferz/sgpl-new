import React from 'react';
import './001.css'; 

const Ocorrencia = () => {
  return (
    <div className="caixa">
      <h1>OCORRÊNCIA</h1>
      <h2>Teclado quebrado #001</h2>
      <p className="rmNumber">RM974568</p>

      <div className="detalhes">
        <p><strong>RM Professor :</strong> 987604</p>
        <p><strong>Data :</strong> 09/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Noturno</p>
        <p><strong>Laboratório :</strong> 1 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 2 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 009675</p>
      </div>

      <div>
        <p className="descri2"><strong>Descrição do problema:</strong></p>
        <p>Teclado ao início da aula foi encontrado com as teclas desmontadas e o cabo de conexão rompido.</p>
      </div>

      <div className="card7">
        <p className="descri7"><strong>Resolução do problema:</strong></p>
        <p>Foi realizada a troca dos equipamentos.</p>
      </div>

      <form action="" method="get">
        <button type="submit" className="btnVoltar2">Voltar</button>
      </form>
    </div>
  );
};

export default Ocorrencia;

