/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './History.css';

class History extends React.Component {
  static propTypes = {
    // movie: PropTypes.shape({
    //     img: PropTypes.string,
    //     title: PropTypes.string,
    //     chapter: PropTypes.string,
    //     totalDuration: PropTypes.number,
    // }),
    movies: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    const { movies } = this.props;
    return (
        <div className={s.wrapper}>
            <div className={s.containerOuter}>
                <div className={s.containerInner}>
                {
                    movies.map( (movie) => {
                        const playedDuration = movie.playedDuration / movie.totalDuration * 100;
                        const barStyle = {
                            width: `${playedDuration}%`
                        }
                        return (
                            <div className={s.movieContainer} key={movie.id}>
                                <a className={s.movieImageWrapper}>
                                    <img src={movie.img}/>
                                    <div className={s.movieDurationBar}>
                                        <span className={s.moviePlayedBar} style={barStyle}></span>
                                    </div>
                                </a>
                                <div className={s.movieDetailWrapper}>
                                    <div className={s.movieTitle}>{movie.title}</div>
                                    <div className={s.movieChapter}>Chapter: {movie.chapter}</div>
                                    <div className={s.movieDuration}>{movie.totalDuration} min.</div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
        
    );
  }
}

export default withStyles(s)(History);
