import './App.css';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import Layout from './components/Layout/index';

function App() {
  return (
    <>
      <Header title='React Pokemon Game' descr='React Marathon 2021' />
      <Layout
        id='#layout-1'
        title='This is Layout 1'
        descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        urlBg
      />
      <Layout
        id='#layout-2'
        title='This is Layout 2'
        descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        colorBg
      />
      <Layout
        id='#layout-3'
        title='This is Layout 3'
        descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        urlBg
      />
      <Footer />
    </>
  );
}

export default App;
