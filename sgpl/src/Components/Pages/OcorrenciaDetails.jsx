import React from 'react';
import './OcorrenciaDetails.css';

const OcorrenciaDetails = () => {
    return (
        <div>
            
            <div className="main">
                <h1>OCORRÊNCIA</h1>
                <h2>Teclado quebrado #001</h2>
                <p className="rm">RM974568</p>

                <div className="info">
                    <p><strong>RM Professor :</strong> 987604</p>
                    <p><strong>Data :</strong> 09/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Noturno</p>
                    <p><strong>Laboratório :</strong> 1 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 2 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 009675</p>
                </div>

                <div>
                    <p className="desc-title"><strong>Descrição do problema:</strong></p>
                    <p>Teclado ao início da aula foi encontrado com as teclas desmontadas e o cabo de conexão rompido.</p>
                </div>
            </div>

            <div className="resolution">
                <p className="desc"><strong>Resolução do problema:</strong></p>
                <p>Foi realizada a troca dos equipamentos.</p>
            </div>

            <form action="devolucoes.html" method="get">
                <button type="submit" className="btn-back">Voltar</button>
            </form>
        </div>
        
    )
}

export default OcorrenciaDetails
