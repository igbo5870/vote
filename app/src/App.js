import React, { Component } from 'react';

import ListName from './ListName'
import menu_close from './menu_close.svg';
import list from './list.json';
import './App.css';
//import MyForm from './handleEventVote';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: null
    }

    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  // Traitement lors du clic sur le bouton oui 
  publish() {
    var inputValue = this.state.nameInput
    var listName = <ListName list={list} />

    for(var i = 0; i < list.length; i++){
      if(inputValue === listName.props.list[i]['first_name']){
        document.getElementById(i).classList.toggle('vote');
      }
    }
    alert(inputValue)
 }
 // Change la valeur sur l'input text
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

// Affichage du contenu list des noms + formulaire 
  render() {

    function doSomething(e){
      e.preventDefault();
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={menu_close} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenue sur l'application de vote</h1>
        </header>
        <div className="message">
          <p className="pmessage">Application en cours de développement.</p>
        </div>
        <div className="listname">
          Votre Liste :
          <ListName 
            list={list}
          />
        </div>
        <div className='form-vote'> 
          <form onSubmit={(doSomething)}>
              <label htmlFor="nameInput">Moi, </label>
              <input 
                  id="nameInput" name="nameInput" type="text" value={ this.state.nameInput }
                  onChange={ this.handleChange } 
              />
              <label> je vote</label><br/>
              <button  onClick={ this.publish } >Oui</button>
              <button id='unCheck'>Non</button>
              
            </form>
        </div>
      </div>
      
    );

    
    
    
  }
}

export default App;
