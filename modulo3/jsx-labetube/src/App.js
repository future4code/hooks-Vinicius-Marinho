import logo from './logo.svg';
import './App.css';

function App() {

  const titulo = "Titulo do Video"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div>
      <div classNome="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
        </header>

        <main>
            <nav classNome="menu-vertical">
                <ul>
                    <li classNome="botoes-meunu-vertical">Início</li>
                    <li classNome="botoes-meunu-vertical">Em alta</li>
                    <li classNome="botoes-meunu-vertical">Inscrições</li>
                    <hr/>                  
                    <li classNome="botoes-meunu-vertical">Originais</li>
                    <li classNome="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section classNome="painel-de-videos">
                <div classNome="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div classNome="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div classNome="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div classNome="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div classNome="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div classNome="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div classNome="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div classNome="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    </div>
  );
}

export default App;
