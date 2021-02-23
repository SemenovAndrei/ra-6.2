import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Form from '../Form/Form'
import Note from './Note/Note'

const NotesElement = styled.div`
  width: 1000px;
`
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
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
`

function Notes(props) {
  console.log(props)

  const onLoad = () => {
    props.onLoad()
  }
  return (
    <NotesElement>
      <Header>
        <Title>Notes</Title>
        <Button onClick={onLoad}>ReFresh</Button>
      </Header>
      <Content>
        {props.children.map((o) => (
          <Note key={o.id}>{o.content}</Note>
        ))}
      </Content>
      <Form />
    </NotesElement>
  )
}

Notes.propTypes = {
  onLoad: PropTypes.func,
}

export default Notes
