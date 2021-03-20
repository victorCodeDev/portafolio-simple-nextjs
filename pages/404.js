import Layout from '../components/Layout';
import Link from 'next/link';

const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>Esta ṕágina no no existe. Por favor regrese a <Link href="/">
                <a>Inicio</a>
            </Link>
            </p>
        </div>
    </Layout>
)

export default custom404;