
import './App.css'
import Calculate from './components/Calculate/Calculate'
import Section from './components/Section/Section'

function App() {
  

  return (
    <>
     
      <h1 className='text-3xl font-bold text-center mt-8'>Course Registration</h1>
      <div className='md:flex space-x-4  w-full m-10'>

      <Section></Section>
      <Calculate></Calculate>
      </div>
      
    </>
  )
}

export default App



