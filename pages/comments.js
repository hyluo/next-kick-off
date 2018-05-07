import { Component } from 'react';
import Page from '../components/pages';
import fetch from '../lib/fetch';
import Link from 'next/link';
const Comments = ({ item }) => (
  <div>
    <h2>
      <a href="{item.url}" target="_blank">
        {item.title}
      </a>
    </h2>
    <div>
      <Link href={`/user?id=${item.user}`}>
        <a>{item.user}</a>
      </Link>
    </div>
  </div>
);
export default class extends Component {
  static async getInitialProps({ query }) {
    return {
      item: await fetch(`/item/${query.id}`)
    };
  }
  render() {
    return (
      <Page>
        <Comments item={this.props.item} />
      </Page>
    );
  }
}
