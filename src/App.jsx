import Title from './Title';
import Noticia from './Noticia';
import Button from './Button';
import "./App.css";
function App() {
    const lista_noticia =[
      {
        horario: "01/06/2022 8:13",
        descricao: "NOTA À COMUNIDADE: Bloqueio do orçamento da Educação",
      },
      {
        horario:"31/05/2022 12:35",
        descricao:"IFRO publica edital para Cadastro de Interesse de Remoção",

      },
      {
        horario:"30/05/2022 09:54",
        descricao:"Parceria entre IFRO e UAB irá ampliar a oferta de cursos de pós graduação e de Pedagogia",
      },
      {
        horario:"25/05/2022 15:10",
        descricao:"Manutenção do Sistema SUAP acontece nesta sexta-feira (27)",
      },
      {
        horario:"25/05/2022 07:44",
        descricao:"Pais e responsáveis por alunos podem ter acesso a informações estudantis pelo App IFRO Mobile",
      },
    ]
    return(
      <div className='container'>           
      <Title />
      {lista_noticia.map((noticia)=>{
        return<Noticia horario={noticia.horario} desc={noticia.descricao}/>
      })}

      <Button frase="MAIS NOTÍCIAS"/>
      </div>
    ); 
}
export default App;
