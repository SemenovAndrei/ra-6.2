import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const NoteElement = styled.div`
  position: relative;
  width: 30%;
  padding: 10px;
  border: 1px solid black;
`
const Button = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 30px;
  padding: 5px;
  color: red;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`

function Note(props) {
  return (
    <NoteElement>
      {props.children}
      <Button>X</Button>
    </NoteElement>
  )
}

Note.propTypes = {}

export default Note
