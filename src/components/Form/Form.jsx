import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormElement = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  font-size: 1rem;
`
const TextArea = styled.textarea`
  padding: 10px;

  resize: none;
`
const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;

  cursor: pointer;
`

function Form(props) {
  return (
    <FormElement>
      <Label>New Note</Label>
      <TextArea name="note" rows="5" cols="30" />
      <Button>ADD</Button>
    </FormElement>
  )
}

Form.propTypes = {}

export default Form
