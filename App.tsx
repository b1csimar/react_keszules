import { Link } from 'react-router-dom'

function App() {
  

  return (
    <>
      <nav>
        <Link to="/szamologep">Számológép</Link> |
        <Link to="/homero">Hőmérő</Link> |
        <Link to="/bmi">BMI</Link> |
        <Link to="/penzvalto">Pénzvátó</Link> |
      </nav>
    </>
  )
}

export default App