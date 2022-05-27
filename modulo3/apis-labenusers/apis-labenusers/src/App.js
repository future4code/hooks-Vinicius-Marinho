import React from "react";
import axios from "axios";

const urlCrateUser =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization:"vinicius-marinho-hooks"
  }
};

class App extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: ""
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(urlCrateUser, headers)
      .then((res) => {
        this.setState({ users: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        alert("Algo deu errado, tente novamente");
      });
  };

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };

    axios
      .post(urlCrateUser, body, headers)
      .then((res) => {
        alert(`Usuário ${this.state.inputName} foi adicionado com sucesso`);
        this.setState({ inputName: "" , inputEmail: ""});
        this.getAllUsers();
      })
      .catch((err) => {
        alert(err.response.data.message);
        this.setState({ inputName: "" , inputEmail: "" });
      });
  };

  onNameTextChange = (event) => {
    this.setState({ inputName: event.target.value });
  };
  onEmailTextChange = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  render() {
    const usersComponents = this.state.users.map((list) => {
      return <li key={list.id}>{list.name}</li>;
    });

    return (
      <div className="App">
        <h1>Labefy</h1>
        <input
          value={this.state.inputName}
          onChange={this.onNameTextChange}
          placeholder="Name"
        />
        <input
          value={this.state.inputEmail}
          onChange={this.onEmailTextChange}
          placeholder="Email"
        />
        <button onClick={this.createUser}>Enviar</button>
        {usersComponents}
      </div>
    );
  }
}

export default App;
