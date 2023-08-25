
import './App.css'

function cabecalho() {
  return (
    <>
      <div className="cabecalho">
        <section>
          <h1>Texto importante</h1>
        </section>
      </div>

      <div className="texto">
      </div>
    </>
  )
}
export default cabecalho

  function App() {

    window.addEventListener('load',function(){
  
  
      const valores=fetch('https://opentdb.com/api.php?amount=30&category=18').then(res=>{
      
      res.json().then(dados=>{
      
          mostraDados(dados);
      });
      }).catch(erro=>{
      
          console.log(erro+" erro na requisição")
      
      });
      
      });

}

export default App

function rodape() {
  return (
    <>
      <div className="rodape">
        <h5>Luiza Montuori</h5>
      </div>

    </>

  )
}
export default rodape
