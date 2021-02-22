import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Form from '../Form/Form'

const Header = styled.header`
  display: flex;
  align-items: center;
`
const Title = styled.h1`
  /* margin: 0; */
`
const Button = styled.button`
  margin-top: 10px;
  margin-left: 10px;
  height: 30px;
  cursor: pointer;
`

function Notes(props) {
  return (
    <div>
      <Header>
        <Title>Notes</Title>
        <Button>ReFresh</Button>
      </Header>
      <div></div>
      <Form />
    </div>
  )
}

Notes.propTypes = {}

export default Notes
