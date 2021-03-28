import Layout from '../components/Layout'
import Error from './_error'

const GitHub = ({ user, status }) => {
    if (!status) {
        return <Error />
    }
    return (
        <Layout footer={false}>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.login}</h1>
                        <img src={user.avatar_url} alt="" className="img-fluid" />
                        <p>{user.bio}</p>
                        <a href={user.htnl_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary my-2">Ir a Github</a>
                        <a href={user.blog} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary my-2">Blog</a>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/victorcodedev');
    const data = await res.json();
    let statusCode;

    if (res.status > 200) {
        statusCode = false;
    } else {
        statusCode = res.status;
    }

    return {
        props: {
            user: data,
            status: statusCode
        }
    }
}

export default GitHub;