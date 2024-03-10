import { useState } from 'react'
import { Button } from '@/components/ui/button'
import './App.css'
import Header from './components/ui/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="contianer">
        <h1>test page</h1>
        <div className="card">
          <Button
            variant="outline"
            onClick={() => setCount(count => count + 1)}
          >
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </>
  )
}

export default App
