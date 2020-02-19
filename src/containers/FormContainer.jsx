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
//llamada  a las APIs en lugar de archivo local
    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(response => response.json())
            .then (data => {
                console.log (data);
                this.setState({
                    usersSaved: data
                });
            });
    }
    
    
    handleInput =(e) =>{
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    [name]: value,
                  
                }
            })
        )
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
                age: '',
                userName: ''
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
                            handleChange={this.handleInput}
                        />
                        <Input
                            name="age"
                            type="text"
                            title="Edad"
                            value={this.state.newUser.age}
                            placeholder= "ingresa tu edad"
                            handleChange={this.handleInput}  
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