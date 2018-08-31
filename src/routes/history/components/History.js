/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { fetchAllHistory } from '../../../actions/history';
import s from './History.css';

class History extends React.Component {
    componentWillMount() {
        this.props.fetchAllHistory();
    }

  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    const { movieDummy, movies } = this.props;
    console.log("movieHistory", movies);
    return (
        <div className={s.wrapper}>
            <div className={s.containerOuter}>
                <div className={s.containerInner}>
                {
                    movieDummy.map( (movie) => {
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

// History.propTypes = {
//     movieHistory: PropTypes.arrayOf(PropTypes.object),
//   };

function mapStateToProps(state, ownProps) {
    console.log("stateeee", state)
    return {
        movies: state.history.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // same effect
        fetchAllHistory : () => dispatch(fetchAllHistory()),
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(History));
export default compose(
    withStyles(s),
    connect(mapStateToProps, mapDispatchToProps)
)(History)