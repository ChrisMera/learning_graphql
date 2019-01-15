import React, { Component } from 'react';
import Link from './Link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// store query
const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

class LinkList extends Component {
  render() {
    // const linksToRender = [
    //   {
    //     id: '1',
    //     description: 'Prisma replaces traditional ORMs and makes it easy to build GraphQL servers 😎',
    //     url: 'https://www.prisma.io',
    //   },
    //   {
    //     id: '2',
    //     description: 'The best GraphQL client',
    //     url: 'https://www.apollographql.com/docs/react/',
    //   },
    // ]

    return (
      // pass FEED_QUERY as prop to <Query /> Component
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching Data</div>
          if (error) return <div>Error</div>
          console.log(data);

          const linksToRender = data.feed.links
          return (
            <div>
              {linksToRender.map(link => <Link key={link.id} link={link} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList;