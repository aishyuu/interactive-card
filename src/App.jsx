import './App.css'
import Card from './components/card'
import Form from './components/form'

function App() {
  return (
    <div className="App">
      <div className="appLeft">
        <div className="background">
        </div>
        <Card />
      </div>
      <div className="appRight">
        <Form />
      </div>
    </div>
  )
}

export default App
