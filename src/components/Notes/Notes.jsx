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
  margin-left: 10px;
  font-size: 2rem;
  color: green;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;

  div {
    margin-bottom: 5%;
  }

  div:nth-child(3n + 2) {
    margin-left: 5%;
    margin-right: 5%;
  }
`

function Notes(props) {
  const onLoad = () => {
    props.onLoad()
  }
  return (
    <NotesElement>
      <Header>
        <Title>Notes</Title>
        <Button onClick={onLoad}>⭮</Button>
      </Header>
      <Content>
        {props.children.map((o) => (
          <Note key={o.id} id={o.id} onDelete={props.onDelete}>
            {o.content}
          </Note>
        ))}
      </Content>
      <Form onChange={props.onChange} note={props.note} onSubmit={props.onSubmit} />
    </NotesElement>
  )
}

Notes.propTypes = {
  onLoad: PropTypes.func,
  onChange: PropTypes.func,
}

export default Notes
