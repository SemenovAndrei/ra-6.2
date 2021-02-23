import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import checkValid from './checkValid'

const FormElement = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  font-size: 1rem;
`
const TextArea = styled.textarea`
  width: 30%;
  padding: 10px;

  resize: none;
`
const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 70%;

  background-color: white;
  cursor: pointer;
`

function Form(props) {
  const onChange = (event) => {
    props.onChange(event.target)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (checkValid(event.target[0])) {
      return
    }
    props.onSubmit()
  }

  return (
    <FormElement onSubmit={onSubmit}>
      <Label>New Note</Label>
      <TextArea
        name="note"
        rows="5"
        cols="30"
        value={props.note || props.name}
        onChange={onChange}
        placeholder="Напишите заметку"
      />
      <Button>➤</Button>
    </FormElement>
  )
}

Form.defaultProps = {
  name: '',
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  note: PropTypes.string,
  onChange: PropTypes.func,
}

export default Form
