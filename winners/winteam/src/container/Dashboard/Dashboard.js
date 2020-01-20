import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button ,Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import { confirmAlert } from 'react-confirm-alert';
import { withRouter, pathname } from 'react-router-dom'


import './index.css';
import * as FetchAction from '../../Actions/Fetch/Fetch.js'
import * as delAction from '../../Actions/DeleteAction/delAction.js'

let arr = [];
let cnt = 0;
class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            selectAll: false,
            checkedItems: new Map(),
            update: false,
            updateData: {},
            pagination: false,
            search: null,
            sort:false
        }
    }
    handleSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    componentWillMount() {
        this.props.action.fetch.fetchData();
    }
    selectAllHandler = (e) => {
        if (e.target.checked) {
            this.setState({
                selectAll: true
            })
            this.props.data.playerData.map((item) => {
                this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item._id, true) }));
            })
        }
        else {
            this.setState({
                selectAll: false
            })
            this.props.data.playerData.map((item) => {
                this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item._id, false) }));
            })
        }


    }
    handleChange(e) {

        const item = e.target.id;
        const isChecked = e.target.checked;
        let dataLen = this.props.data.playerData.length;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
        if (isChecked) {
            cnt++;
        }
        else {
            cnt--;
        }
        console.log(cnt);
        if (cnt == dataLen) {
            this.setState({
                selectAll: true
            })
        }
        if (!isChecked) {
            this.setState({
                selectAll: false
            })
        }

    }

    getSelectData = () => {
        const playerData = this.props.data.playerData;
        console.log(playerData)
        const { checkedItems } = this.state;
        let arr = [];
        checkedItems.forEach(function (item, key, mapObj) {
            if (item) {
                playerData.map((singledata) => {
                    if (key == singledata._id) {
                        arr.push(singledata);
                    }
                })
            }
        });
        if (arr.length > 0) {

            this.props.history.push({ pathname: '/selectedData' }, { state: { data: arr } })
        }
        else {
            alert("Please select data to view")
        }
    }
    deleteData = (e) => {
        const id = e.target.id;
        confirmAlert({
            title: 'Delete User',
            message: 'Are you sure you want to delete?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        alert(id);

                        this.props.action.del.del({ id })
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Canceled')
                }
            ]
        })
    }
    filterChange=(e)=>{
       // alert(e.target.value)
        this.setState({
            sort:true
        })
    }
    updateData = (e) => {
        const id = e.target.id;
        console.log(this.props.data.playerData)
        this.setState({
            update: true
        })
        console.log(this.state.updateData);
        this.props.history.push({ pathname: '/registration' }, { state: { data: this.props.data.playerData[id], edit: true } })
    }
    render() {
        let FilteredData = this.props.data.playerData;
        const { search,sort } = this.state;

        if (search == null || search == "") {
            FilteredData = this.props.data.playerData
        }
        else if (search != null || search != "") {
            FilteredData= FilteredData.filter(function (player) {
                return ['Name', 'Team','PRole'].some(function (k) {
                    return player[k].toString().indexOf(search) !== -1;
                });
            });
            console.log(FilteredData)
        } 
        const AllData = FilteredData.map((item, i) => {
            let sr = 'http://localhost:3000/' + item.Profile;
            return (
                <tr selected>
                    <td>
                        <input type="checkbox" id={item._id} name={'chk'} checked={this.state.selectAll || this.state.checkedItems.get(item._id)} onChange={this.handleChange.bind(this)} />
                    </td>
                    <td>{i + 1}</td>
                    <td>{item.Name}</td>
                    <td>{item.BornDate.substr(0, 10)}</td>
                    <td>{item.PRole}</td>
                    <td>{item.BatingStyle}</td>
                    <td>{item.BowlingStyle}</td>
                    <td>{item.Team}</td>
                    <td><img src={sr} className='profiles' /></td>
                    <td>
                        <Button color="danger" id={item._id} onClick={this.deleteData.bind(this)}>Delete</Button>
                        <Button color="primary" id={i} onClick={this.updateData.bind(this)}>Update</Button>
                    </td>
                </tr>
            )

        })
        return (
            <div class="container">

                <h1 align='center'>Player's Data</h1>
                <div class="active-pink-3 col-3 float-right">
                    <input class="form-control" type="text" onChange={this.handleSearch} placeholder="Search" aria-label="Search" name='search' value={this.state.search} />
                </div>
                <div class='float-right' >
                    <select className="browser-default custom-select" onChange={this.filterChange}>
                        <option value="Name">Name</option>
                        <option value="Team">Team</option>
                    </select>
                </div>
                
                <br />
                <br />
                <div class="row">
                    <div class="col-12">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">

                                        <input type="checkbox" align='left' id="defaultUnchecked" name="selectAll" onChange={this.selectAllHandler.bind(this)} checked={this.state.selectAll} />

                                    </th>
                                    <th>Sr.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">BatingStyle</th>
                                    <th scope="col">BowlingStyle</th>
                                    <th scope="col">Team</th>
                                    <th scope="col">Profile</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                {AllData}
                            </tbody>


                        </table>

                        <div>
                            <Button type="submit" color='primary' align='center' onClick={this.getSelectData}>view Selected</Button>
                        </div>
                    </div>
                </div>


            </div >

        )
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
        fetch: bindActionCreators(FetchAction, dispatch),
        del: bindActionCreators(delAction, dispatch)
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
