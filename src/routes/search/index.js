import React from 'react';
import Layout from '../../components/Layout';
import SearchCategory from './SearchCategory';

const title = 'New User Registration';

function action() {
  return {
    chunks: ['search'],
    title,
    component: (
      <Layout>
        <SearchCategory title={title} />
      </Layout>
    ),
  };
}

export default action;
