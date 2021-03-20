import Layout from '../components/Layout'

const Index = () => (
    <Layout>
        {/** Header Card*/}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-dark">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="foto_perfil.jpeg" alt="Foto de Perfil" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Juan Perez</h1>
                            <h3>Full Stack Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, excepturi in ut ad necessitatibus modi exercitationem alias neque impedit, repellat voluptate rerum. Iure voluptatem, dolores nostrum temporibus pariatur quibusdam. Natus.</p>
                            <a href="/">Contáctame</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/** segunda seccion**/}
        <div className="row">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Habilidades</h1>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Experiencia</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index;