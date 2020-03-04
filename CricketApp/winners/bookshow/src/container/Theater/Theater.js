import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FetchAction from '../../actions/fetxhAction.js'
import * as FetchMovie from '../../actions/fetchmovie.js'
import { withRouter, pathname } from 'react-router-dom'

import { Button } from 'reactstrap'

class Theater extends Component {
    componentWillMount() {
        this.props.action.fetch.fetchData();
    }
    getMovie=(e)=>{
        let movies=[];
        this.props.action.fetchmovie.fetchMovie({Name:e.target.name});
        
         movies = this.props.data.movies.movies;
    
        console.log(movies)
        
       
         if (movies.length > 0) {

            this.props.history.push({ pathname: '/movies' }, { state: { data: movies ,t:e.target.name } })
         }
    }
    render() {
        const data = this.props.data.fetch.theater;
        return (
            <table align='center'>
                {
                    data.map((item, i) => {
                        return (
                            <tr>
                                <td>
                                    <Button onClick={this.getMovie} name={item.Name}>{item.Name}</Button>
                                </td>
                            </tr>
                        )
                    })
                }


            </table>

        )
    }
}

const mapStateToProps = (state) => {

    const { fetch , movies} = state;

    console.log("state", state);
    return {
        data: {
            fetch:fetch,
            movies,movies
        }
        
    }
}

const mapDispatchToProps = dispatch => ({
    action: {
        fetch: bindActionCreators(FetchAction, dispatch),
        fetchmovie:bindActionCreators(FetchMovie,dispatch)
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Theater))
