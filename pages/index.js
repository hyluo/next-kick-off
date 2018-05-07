import { Component } from 'react';
import Page from '../components/pages';
import fetch from '../lib/fetch.js';
import Link from 'next/link';

const Feed = ({ feed }) => (
  <li>
    <span>{feed.points || 1} </span>
    <span>
      <div>
        <a href="{feed.url}" target="_blank">
          {feed.title}
        </a>
      </div>
      <div>
        <span>
          <Link href={`/user?id=${feed.user}`}>
            <a>{feed.user}</a>
          </Link>
        </span>
      </div>
    </span>
  </li>
);

const Feeds = ({ feeds, url: { pathname, query } }) => (
  <div>
    <ul>{feeds.map(f => <Feed key={f.id} feed={f} />)}</ul>
  </div>
);
export default class extends Component {
  static async getInitialProps({ pathname, query }) {
    const feed = pathname == '/' ? '/news' : pathname;
    const page = query.page ? `/${query.page}` : '1';

    return {
      feeds: await fetch(`${feed}/${page}`)
    };
  }
  //{this.props.feeds.map(f => <div>{f.title}</div>)}
  render() {
    return (
      <Page>
        <Feeds feeds={this.props.feeds} url={this.props.url} />
      </Page>
    );
  }
}
