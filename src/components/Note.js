import React from 'react'

export const Note = ({ note }) => {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
      <ul>
        {note.tags.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

/*
{
  allContentfulNote(limit:1) {
    edges{
      node{
        title
        description{
          description
        }
        tags
      }
    }
  }
}
*/
