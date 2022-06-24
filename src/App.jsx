import Title from './Title';
import Noticia from './Noticia';
// import Button from './Button';
import "./App.css";
function App() {
    const lista_noticia =[
      {
        name: "Start",
        descricao: "Free",
        users: "1 Users",
        project: "1 Project"
      },
      {
        name:"Basic",
        descricao:"$19.99",
        users: "5 Users",
        project: "20 Projects"
      },
      {
        name:"Expert",
        descricao:"$129.99",
        users: "Unlimited Users",
        project: "Unlimited Projects"
      },
    ]
    return(
      <div className='container'>           
      <Title />
      {lista_noticia.map((noticia)=>{
        return<Noticia name={noticia.name} desc={noticia.descricao} users={noticia.users} project={noticia.project}/>
      })}

      {/* <Button frase="MAIS NOTÍCIAS"/> */}
      </div>
    ); 
}
export default App;
