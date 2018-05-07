import { Component } from 'react';
import Page from '../components/pages';
import fetch from '../lib/fetch.js';

export default class extends Component {
  static async getInitialProps({ pathname, query }) {
    const feed = pathname == '/' ? '/news' : pathname;

    const page = query.page ? `/${query.page}` : '1';
    return {
      feeds: await fetch(`${feed}/${page}`)
    };
  }
  render() {
    return <Page>{this.props.feeds.map(f => <div>{f.title}</div>)}</Page>;
  }
}
