import React, { Component } from 'react';
import Input from "../components/Input"
import PreviewData from "../components/PreviewData"
import Button from "../components/Button"

const INITIAL_STATE =[
    {
        name: 'Ceci',
        age: '39'
    }
];

class FormContainer extends Component {
    state ={
            newUser:{
                name: '',
                age: ''
            },
            usersSaved: INITIAL_STATE
        }

    componentDidMount(){
        console.log ('componentDidMount');

    }
    
    
    handleName = (e) =>{
        let value = e.target.value;
        this.setState (
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    name : value
                }
            })
        );
        
    }


    handleAge = (e) =>{
        let value = e.target.value;
        this.setState (
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    age : value
                }
            })
        );
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();
        let userData = this.state.newUser;
        this.setState(prevState => (
            {
                usersSaved: [ 
                ...prevState.usersSaved, userData],
                newUser: {
                    name:'',
                    age:''
        
                }
            }
        ));
    }

    handleClearForm = (e) =>{
        e.preventDefault();
        this.setState(
            {
            newUser:{
                name: '',
                age: ''
            }
            }
        );
    }


    render() { 
        return ( 
            <div className="row">
                <div className="col-8">
                    <p>Formulario React JS</p>
                    <form>
                        <Input 

                            name="name"
                            type="text"
                            title="Nombre"
                            value={this.state.newUser.name}
                            placeholder="Ingresa tu nombre"
                            handleChange={this.handleName}
                        />
                        <Input
                            name="age"
                            type="text"
                            title="Edad"
                            value={this.state.newUser.age}
                            placeholder= "ingresa tu edad"
                            handleChange={this.handleAge}  
                        />
                        
                        <Button 
                            action ={this.handleFormSubmit}
                            title = "Enviar"
                        />
                    
                        <Button 
                            action ={this.handleClearForm}
                            title = "Borrar"
                        />
                    </form>
               </div>
               <PreviewData data={this.state.usersSaved} 
               />
            </div>   
         );
    }
};
 
export default FormContainer;