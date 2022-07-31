import ReactMarkdown from 'react-markdown'
import logo from './img/rainbow-cow-logo.gif'
import wavingScarecrow from './img/waving-scarecrow.gif'
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="pt-4 pb-6">
        <img src={logo} alt="Rainbow Cow logo" className="mx-auto" />
      </header>
      <main className="max-w-4xl mx-auto">
        <section>
          <ReactMarkdown>{`
Hello! We are Rainbow Cow, AKA [Jeremy Kahn](https://github.com/jeremyckahn/) and [Luke Stebner](https://github.com/lstebner/). We're a pair of independent game developers who love making fun games for people.

Our story begins with [Farmhand](https://farmhand.life/), an open source game started by Jeremy. Along the way Luke started contributing regularly to Farmhand and the two decided to start experimenting with new game concepts. The first project they started together is [Farmhand Go!](https://rainbowcow-studio.itch.io/farmhand-go), a more active take on the original Farmhand concept.

Luke and Jeremy look forward to expanding the Farmhand universe and perhaps expanding beyond it in time. Stay tuned to see where we go! We hope you'll enjoy going on the adventure with us.

## Our projects

- [Farmhand](https://farmhand.life/)
- [Farmhand Go!](https://rainbowcow-studio.itch.io/farmhand-go)

## GitHub

- [Luke Stebner](https://github.com/lstebner/)
- [Jeremy Kahn](https://github.com/jeremyckahn/)

## Twitter

- [Farmhand Twitter](https://twitter.com/farmhandgame/)
- [Luke](https://twitter.com/onehumblepot/)
- [Jeremy](https://twitter.com/jeremyckahn/)
`}</ReactMarkdown>
          <img
            src={wavingScarecrow}
            alt="Waving scarecrow"
            className="mx-auto mt-4"
            style={{ maxWidth: 200 }}
          />
          <ReactMarkdown className="text-sm text-center">{`
[Source code for this website](https://github.com/rainbowcow-studio/website)
`}</ReactMarkdown>
        </section>
      </main>
    </div>
  )
}

export default App
