import Content from './Content'
import { ThemeContext } from './ThemeProvider'
import { useContext } from 'react'

const TestReactContext = () => {
    const context = useContext(ThemeContext)

  return (
    
        <div style={{ padding: 20 }}>
            <button  onClick={context.toggleTheme}>Toggle theme</button>
            <Content />
        </div>
  )
}

export default TestReactContext