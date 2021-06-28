import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
//Wrap content in Layout component (adjust width and margin).
import Layout from '../components/layout/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
