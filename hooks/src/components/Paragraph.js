import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

function Paragraph () {
    const context = useContext(ThemeContext)

  return (
    <p className={context.theme}>abceeeeeeeeeeeeeeeeeeewfsdvdv</p>
  )
}

export default Paragraph