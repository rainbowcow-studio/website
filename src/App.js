import ReactMarkdown from 'react-markdown'
import logo from './img/rainbow-cow-logo.gif'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <main>
        <ReactMarkdown>{`Hello! We are Rainbow Cow, AKA [Jeremy Kahn](https://github.com/jeremyckahn/) and [Luke Stebner](https://github.com/lstebner/). We're a pair of developers who love making fun games for people.`}</ReactMarkdown>
      </main>
    </div>
  )
}

export default App
