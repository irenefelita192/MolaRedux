import React from 'react';
import Layout from '../../components/Layout';
import History from './components/History';

const title = 'History';

// const axios = require('axios');

// // Make a request for a user with a given ID
// axios.get('http://mola.lukitomo.com/v2/videos/playlists/horror')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });


function action() {
    const dummyHistory = [
        { id:1, title: 'Hannibal Lecter - Season 3', chapter: 'Thirty three', playedDuration: 30, totalDuration: 49, img: 'https://via.placeholder.com/331x207'},
        { id:2, title: 'The Greatest Showman', chapter: 'One', playedDuration: 20, totalDuration: 100, img: 'https://via.placeholder.com/331x207'},
        { id:3, title: 'Hannibal Lecter - Season 3', chapter: 'Thirty three', playedDuration: 30, totalDuration: 49, img: 'https://via.placeholder.com/331x207'},
        { id:4, title: 'The Greatest Showman', chapter: 'One', playedDuration: 20, totalDuration: 100, img: 'https://via.placeholder.com/331x207'},
        { id:5, title: 'Hannibal Lecter - Season 3', chapter: 'Thirty three', playedDuration: 30, totalDuration: 49, img: 'https://via.placeholder.com/331x207'},
        { id:6, title: 'The Greatest Showman', chapter: 'One', playedDuration: 20, totalDuration: 100, img: 'https://via.placeholder.com/331x207'},
        { id:7, title: 'Hannibal Lecter - Season 3', chapter: 'Thirty three', playedDuration: 30, totalDuration: 49, img: 'https://via.placeholder.com/331x207'},
        { id:8, title: 'The Greatest Showman', chapter: 'One', playedDuration: 20, totalDuration: 100, img: 'https://via.placeholder.com/331x207'},
        { id:9, title: 'Hannibal Lecter - Season 3', chapter: 'Thirty three', playedDuration: 30, totalDuration: 49, img: 'https://via.placeholder.com/331x207'},
        { id:10, title: 'The Greatest Showman', chapter: 'One', playedDuration: 20, totalDuration: 100, img: 'https://via.placeholder.com/331x207'},
        { id:11, title: 'Hannibal Lecter - Season 3', chapter: 'Thirty three', playedDuration: 30, totalDuration: 49, img: 'https://via.placeholder.com/331x207'},
        { id:12, title: 'The Greatest Showman', chapter: 'One', playedDuration: 20, totalDuration: 100, img: 'https://via.placeholder.com/331x207'},
    ]

  return {
    chunks: ['history'],
    title,
    component: (
      <Layout>
        <History movies={dummyHistory}/>
      </Layout>
    ),
  };
}

export default action;
