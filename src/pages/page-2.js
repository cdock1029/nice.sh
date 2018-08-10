import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { Note } from '../components/Note'

import Layout from '../components/layout'

const SecondPage = ({ data: { allContentfulNote } }) => {
  return (
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <div>
        <h1>Notes</h1>
        <div>
          {allContentfulNote.edges.map(e => {
            const { title, tags, description } = e.node
            return (
              <Note
                key={title}
                note={{ title, tags, description: description.description }}
              />
            )
          })}
        </div>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  query {
    allContentfulNote {
      edges {
        node {
          title
          description {
            description
          }
          tags
        }
      }
    }
  }
`
