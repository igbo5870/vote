import React, { Component } from 'react';

import ListName from './Component/ListName';
import menu_close from './Image/menu_close.svg';
import list from './Data/list.json';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      name: null,
      countOUI: 0,
      countNON: 0
    }

    this.onClickOUI = this.onClickOUI.bind(this);
    this.onClickNon = this.onClickNon.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  onClickNon(){
    var inputValue = this.state.nameInput
    var listName = <ListName list={list} />
    
    for(var i = 0; i < list.length; i++){
      if(inputValue === listName.props.list[i]['first_name']){
        this.setState({
          countNON: this.state.countNON + 1
        });
        document.getElementById(i).classList.remove('no-vote')
        document.getElementById(i).classList.add('vote');
      }
    }
    
  }

  onClickOUI(){
    var inputValue = this.state.nameInput
    var listName = <ListName list={list} />

    for(var i = 0; i < list.length; i++){
      var className = document.getElementById(i).classList.contains('no-vote')

      if(inputValue === listName.props.list[i]['first_name'] && className){
        document.getElementById(i).classList.remove('no-vote')
        document.getElementById(i).classList.add('vote');
        this.setState({
          countOUI: this.state.countOUI + 1
        });
      }
    }
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
          <p className="jeVote">JE VOTE!</p>
          <img src={menu_close} className="App-logo" alt="logo" />
          
        </header>
        <div className="content-page">
          <div className ="content-middle">
            <div className="question">
            <h1>{this.state.inputQuestion}</h1>
            </div>
            <div className="form-vote"> 
              <form onSubmit={doSomething}>
                <label htmlFor="nameInput">Moi, </label>
                <input 
                    id="nameInput" class="nameInput"name="nameInput" type="text" value={ this.state.nameInput }
                    onChange={ this.handleChange } 
                />
                <label> je vote</label><br/>
                <button id="btOui" class="btOui" onClick={ this.onClickOUI }>OUI</button>
                <button id="btNon" class="btNon" onClick={ this.onClickNon } >NON</button>
              </form>
            </div>
          </div>
          <div className="slide-right">
            <div className="form-question">
              <p>Votre question :</p>
              <input type="text" id="inputQuestion" class="inputQuestion" placeholder="Posez votre question ici" name="inputQuestion" onChange={ this.handleChange }  />
            </div>
            <div className="listname">
              <div><ListName list={list} /></div>
              <p>OUI : {this.state.countOUI} </p>
              <p>NON : {this.state.countNON} </p>
            </div>
        </div>
        </div>
      </div>
    ); 
  }
}

export default App;
