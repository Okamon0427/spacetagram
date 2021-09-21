import Layout from './components/Layout';
import Routes from './routes';
import MuiColorProvider from './components/Color';

const App = () => {  
  return (
    <>
      <MuiColorProvider>
        <Layout>
          <Routes />
        </Layout>
      </MuiColorProvider>
    </>
  );
}

export default App;
