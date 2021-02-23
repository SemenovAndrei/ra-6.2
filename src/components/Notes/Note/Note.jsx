import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  const onDelete = (event) => {
    props.onDelete(event.target.id)
  }

  return (
    <NoteElement>
      {props.children}
      <Button id={props.id} onClick={onDelete}>
        X
      </Button>
    </NoteElement>
  )
}

Note.propTypes = {
  onDelete: PropTypes.func,
}

export default Note
