import'./Main.css'
import ServicoCard from '../ServicoCard/ServicoCard'

function Main (){
    return(
        <main className='main'>
        <section className='hero'>
             <h1> Criamos sites que funcionam</h1>
            <p>Layouts responsaveis, rapidos e acessiveis para  o seu negocio crescer na web.</p>

             <div className='hero-buttons'>
            <a href="#orçamento" className='btn-primary'>Peça um orçamento</a>
            <a href="#portofolio" className='btn-secondary'>Ver portofolio</a>
             </div>
         </section> 
                  <section className='servico'>
                <h2>Nossos serviços</h2>

                <div className='servicos-grid'>
                   <ServicoCard icone="🙉" titulo="Design de interface" descricao="Telas claras, pensadas para o usuário"/>
                   <ServicoCard icone="🙈" titulo="Design de interface" descricao="Telas claras, pensadas para o usuário"/>
                   <ServicoCard icone="🙊" titulo="Design de interface" descricao="Telas claras, pensadas para o usuário"/>

                    
                </div>
            </section>

        </main>
    )
}
export default Main