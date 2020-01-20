import React, { Component } from 'react'
import '../../index.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, Label, Input, FormGroup, Col } from 'reactstrap'
import {  NavLink } from 'reactstrap';

import {  Link } from "react-router-dom";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBInput, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact'
import moment from 'moment';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as regAction from '../../Actions/Registration/regAction.js'
import * as updateAction from '../../Actions/updateAction/updateAction.js'

const s = [];
export class Registration extends Component {
    constructor(props) {
        super(props)    
        this.state = {
            Username: null,
            BornDate: null,
            Prole: null,
            BowlingStyle:null,
            BatingStyle: null,
            Team: 'Select Team',
            Password:null,
            Cpassword:null,
            Profile: null,
            bat: false,
            ball: false,
            Header:'Registration',
            btnName:'Register',
            model:true


        }
        
    }
    componentWillMount(){
       if(this.props.location.state!=undefined)
       {
        if(this.props.location.state.state.edit){
            this.setState({
                Header:'update',
                btnName:'Update'
            })
            const data=this.props.location.state.state.data;
            const {Name,BornDate,PRole,Team,BatingStyle,BowlingStyle}=data;
            this.setState({
                Username:Name,
                Prole:PRole,
                BornDate:BornDate,
                BatingStyle:BatingStyle,
                BowlingStyle:BowlingStyle,
                Team:Team
            })
 
            if(PRole=='Bowler,'){
                
               this.setState({
                   ball:true
               })
            }
 
            if(PRole=='Batsman,'){
             this.setState({
                 bat:true
             })
            }
 
            if(PRole=="Bowler,Batsman,"){
                this.setState({
                    ball:true,
                    bat:true
                })
            }
 
        }
       }
    }
    validate=()=>{
        const {Username,BornDate,Prole,Team,Password,Profile,BatingStyle,BowlingStyle,Cpassword}=this.state;
        if(Username==null ||BornDate==null||Prole==null||Team==null||Password==null){
            alert("Please Enter all values");
            return false;
        }
        if(BatingStyle == null && BowlingStyle == null)
        {
            alert("Enter Style");
            return false;
        }
        if(!Password.match(Cpassword)){
            alert("Wrong Password")
            return false;
        }

        return true
    }
    register=()=>{
        
        const {Username,BornDate,Prole,Team,Password,Profile,BatingStyle,BowlingStyle,Cpassword}=this.state;
        let data=new FormData();
        data.append('Name',Username);
        data.append('BornDate',BornDate);
        data.append('PRole',Prole);
        data.append('Team',Team);
        data.append('Password',Password);
        data.append('Profile',Profile);
        data.append('BatingStyle',BatingStyle);
        data.append('BowlingStyle',BowlingStyle);
        if(this.props.location.state!=undefined){
            if(this.props.location.state.state.edit){
                const updateData=this.props.location.state.state.data;
                const id=updateData._id
                this.props.action.updata.updateData(id,data);
                this.setState({
                    model:false
                })
               this.props.history.replace('/admin')
        }
        }else{
            if(this.validate()){
                this.props.action.reg.register(data);
                 this.props.history.replace('/');
                }
        }
           
    }
    handleCheck = (e) => {
        if(e.target.name=='Profile'){
            this.setState({Profile:e.target.files[0]});
        }
        else{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
        
        
    }
    onCheckedHandler = (event) => {
        let st = ''
        if (event.target.checked) {
            if (event.target.value == "Bowler") {
                this.setState({ ball: true })
                s.push('Bowler')
            }
        }
        else {
            if (event.target.value == "Bowler") {
                this.setState({ ball: false })
                s.pop('Bowler')
            }
        }
        if (event.target.checked) {
            if (event.target.value == "Batsman") {
                this.setState({ bat: true })
                s.push('Batsman')
            }
        }
        else {
            if (event.target.value == "Batsman") {
                this.setState({ bat: false })
                s.pop('Batsman')
            }
        }
        console.log("arr" + s);
        s.map((item) => {
            st += item + ',';
        })
        console.log("style " + st)
        this.setState({ Prole: st })
        console.log("state " + this.state.Prole)



    }
    cancel=()=>{
        const data=this.state;
        data.Username='';
        this.props.history.replace('/');

    }
    checkval = (e) => {
       
        const { Team } = this.state;
        if (e.target.value == '') {
            e.target.classList.add('is-invalid')
        }
        else {
            e.target.classList.remove('is-invalid')
            e.target.classList.add('is-valid')
        }
        if(e.target.name=='Team')
        {   
                if(Team=='')
                {
                    e.target.classList.add('is-invalid')
                }
                else
                {
                    e.target.classList.remove('is-invalid')
                    e.target.classList.add('is-valid')
                }
        }
        
        

    }
    render() {
    
        return (
            <div className='img'>
                <Form className='myStyle'>
                    <Modal isOpen={this.state.model} className={this.className} className='model-backdrop'>
                        <ModalHeader >{this.state.Header}</ModalHeader>
                        <ModalBody>


                            <FormGroup row>
                                <Label sm={2}>Name</Label>
                                <Col sm={10}>
                                    <input type="text" class="form-control " name="Username" value={this.state.Username} onBlur={this.checkval.bind(this)} onChange={this.handleCheck.bind(this)} id="validationServer043" placeholder="name"
                                        required />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label  sm={2}>DOB</Label>
                                <Col sm={10}>
                                    <input type="date" class="form-control " name="BornDate" value={moment(this.state.BornDate).format("YYYY-MM-DD")} onBlur={this.checkval.bind(this)} onChange={this.handleCheck.bind(this)} id="validationServer043" placeholder="dob"
                                     max={moment().format("YYYY-MM-DD")}   required />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Role</Label>
                                <Col sm={10}>
                                    <div class="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" class="custom-control-input " id="defaultChecked2" name='Prole' value='Bowler' onChange={this.onCheckedHandler.bind(this)} checked={this.state.ball}  />
                                        <label class="custom-control-label" for="defaultChecked2">Bowler</label>
                                    </div>
                                    {
                                        this.state.ball &&
                                        <div>
                                            <br />
                                            <FormGroup row>
                                                <Label for="exampleEmail" sm={2}>Style</Label>
                                                <Col sm={10}>
                                                    <input type="text" class="form-control " name="BowlingStyle" value={this.state.BowlingStyle} onBlur={this.checkval.bind(this)} onChange={this.handleCheck.bind(this)} id="validationServer043" placeholder="BowlingStyle"
                                                        required />
                                                </Col>
                                            </FormGroup>
                                        </div>
                                    }
                                    <br />
                                    <div class="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" class="custom-control-input" name='Prole' id="defaultInline2" value='Batsman' onChange={this.onCheckedHandler.bind(this)}  checked={this.state.bat}/>
                                        <label class="custom-control-label" for="defaultInline2">Batsman</label>
                                    </div>
                                    {
                                        this.state.bat &&
                                        <div>
                                            <br />
                                            <FormGroup row>
                                                <Label for="exampleEmail" sm={2}>Style</Label>
                                                <Col sm={10}>
                                                    <input type="text" class="form-control " name="BatingStyle" value={this.state.BatingStyle} onBlur={this.checkval.bind(this)} onChange={this.handleCheck.bind(this)} id="validationServer043" placeholder="BatingStyle"
                                                        required />
                                                </Col>
                                            </FormGroup>
                                        </div>
                                    }
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Team</Label>
                                <Col sm={10}>
                                    <select className="browser-default custom-select"   defaultValue={this.state.Team}  name="Team" onBlur={this.checkval.bind(this)} onChange={this.handleCheck.bind(this)}>
                                        <option disabled >Select Team</option>
                                        <option value="Team1">Team1</option>
                                        <option value="Team2">Team2</option>
                                        <option value="Team3">Team3</option>
                                    </select>

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label  sm={2}>password</Label>
                                <Col sm={10}>
                                    <input type="password" class="form-control " name="Password" value={this.state.Password} onBlur={this.checkval.bind(this)} onChange={this.handleCheck.bind(this)} id="validationServer043" placeholder="password"
                                        required />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Confirm</Label>
                                <Col sm={10}>
                                    <input type="password" class="form-control " name="Cpassword" value={this.state.Cpassword} onBlur={this.checkval.bind(this)} onChange={this.handleCheck.bind(this)} id="validationServer043" placeholder="confirm password"
                                        required />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Label>Profile</Label>
                                <input type="file" name="Profile"   onChange={this.handleCheck.bind(this)} onBlur={this.checkval.bind(this)} />
                            </FormGroup>


                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.register}>{this.state.btnName}</Button>{' '}
                            <Button color="primary" onClick={this.cancel} >Cancel</Button>
                    </ModalFooter>
                    <div>
                            <p className='pstyle'>Already Registered?
                            <NavLink tag={Link} to='/'>LogIn</NavLink></p>
                            </div>
                    </Modal>
                </Form>
            </div >

        )
    }
}

const mapStateToProps = (state) =>{
    const { reg } = state;
    return{
        reg:reg
    }
}

const mapDispatchToProps = dispatch => ({
    action:{
        reg:bindActionCreators(regAction, dispatch),
        updata:bindActionCreators(updateAction,dispatch)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Registration);
