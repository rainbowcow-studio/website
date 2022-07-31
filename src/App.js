import ReactMarkdown from 'react-markdown'
import logo from './img/rainbow-cow-logo.gif'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="pt-4 pb-6">
        <img src={logo} alt="logo" className="mx-auto" />
      </header>
      <main className="max-w-4xl mx-auto">
        <section>
          <ReactMarkdown>{`Hello! We are Rainbow Cow, AKA [Jeremy Kahn](https://github.com/jeremyckahn/) and [Luke Stebner](https://github.com/lstebner/). We're a pair of developers who love making fun games for people.`}</ReactMarkdown>
        </section>
      </main>
    </div>
  )
}

export default App
