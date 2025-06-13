import Layout from './layout/Layout'
import Home from './pages/home/Home'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal();
  return (
    <Layout>
      <Home/>
    </Layout>
  )
}

export default App
