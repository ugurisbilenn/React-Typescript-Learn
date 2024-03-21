import React from 'react'
import { useContext } from 'react';
import {ThemeContext} from './ThemeContext'
function ContextExemple() {
    const theme = useContext(ThemeContext);
  return (
    <div style={{backgroundColor:theme.primary.main,color:theme.secondary.text}}>
      Context Exemple
    </div>
  )
}

export default ContextExemple
