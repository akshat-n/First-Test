import React, { Component } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Button ,Table} from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FetchAction from '../../Actions/Fetch/Fetch.js'
import './index.css'
class pagination extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPage: 1,
            recordPerPage: 3,
            firstPage: 1,
            lastPage: 1
        }
    }
    handleClick = (event) => {
        alert(event.target.id)
        this.setState({
            currentPage: Number(event.target.id)
        })
    }
    renderPrevious = () => {
        const { currentPage, firstPage } = this.state
        return (
            <div>
                <PaginationItem>
                    <PaginationLink first id={firstPage} onClick={this.handleClick} ></PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous id={currentPage - 1} onClick={this.handleClick} ></PaginationLink>
                </PaginationItem>
            </div>
        )

    }
    back=()=>{
        this.props.history.goBack();
    }
    render() {
        const data = this.props.location.state.state.data;

        const { currentPage, recordPerPage } = this.state

        const indexOfLastData = currentPage * recordPerPage;
        const indexOfFirstData = indexOfLastData - recordPerPage;
        const currentRecords = data.slice(indexOfFirstData, indexOfLastData);
        const renderRecords = currentRecords.map((record, index) => {
            let sr = 'http://localhost:3000/' + record.Profile;
            return (

                <tr>
                    <td>{index + 1}</td>
                    <td>{record.Name}</td>
                    <td>{record.BornDate.substr(0, 10)}</td>
                    <td>{record.PRole}</td>
                    <td>{record.BatingStyle}</td>
                    <td>{record.BowlingStyle}</td>
                    <td>{record.Team}</td>
                    <td><img src={sr} className='profiles' /></td>


                </tr>

            )
        });
        const totalPage = Math.ceil(data.length / recordPerPage);
        const pageNumbers = [];
        for (let i = 1; i <= totalPage; i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (

                <PaginationItem>
                    <PaginationLink id={number} onClick={this.handleClick} >{number}</PaginationLink>
                </PaginationItem>

            );
        })
        return (
            <div>
                <div>
                <Table hover striped bordered  align="center" className='tableStyle'>
                    <thead>
                        <tr>
                            <th>Sr.</th>
                            <th scope="col">Name</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Role</th>
                            <th scope="col">BatingStyle</th>
                            <th scope="col">BowlingStyle</th>
                            <th scope="col">Team</th>
                            <th scope="col">Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRecords}
                    </tbody>
                </Table>
                </div>
                <div>
                <Pagination aria-label="Page navigation example">

                    <PaginationItem>
                        <PaginationLink onClick={this.handleClick} id={this.state.firstPage}>{'<'}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink id={currentPage == 1 ? 1 : currentPage - 1} onClick={this.handleClick}  >{'<<'}</PaginationLink>
                    </PaginationItem>
                    {renderPageNumbers}
                    <PaginationItem>
                        <PaginationLink id={totalPage == currentPage ? totalPage : currentPage + 1} onClick={this.handleClick} >{'>>'}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={this.handleClick.bind(this)} id={totalPage} >{'>'}</PaginationLink>
                    </PaginationItem>
                </Pagination>
              </div>
              <div class='float-right'>
              <Button color="primary" onClick={this.back}>Back</Button>
              </div>
              
            </div>
        );
    }
}


const mapStateToProps = (state) => {

    const { fetch } = state;

    console.log("state", state);
    return {
        data: fetch
    }
}

const mapDispatchToProps = dispatch => ({
    action: {
        fetch: bindActionCreators(FetchAction, dispatch)

    }
})
export default connect(mapStateToProps, mapDispatchToProps)(pagination)

