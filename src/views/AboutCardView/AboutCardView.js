import { ImUndo2 } from "react-icons/im";

const { Component } = require("react");


class AboutCardView extends Component{
    state = {
            id: "",
            created: "",
            gender: "",
            name: "",
            location: "",
            species: "",
            image: "",
            status: ""  
    }

async componentDidMount(){
  await  fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.aboutId}`)
    .then(response => response.json())
    .then(data => this.setState({...data}))
       
}
    render() {
        const {created, gender, name, location, species, image, status} = this.state;
       
        return (
            <div className="AboutCard">
                <button type="button" onClick={() => this.props.history.push(this.props.location.state.from)}><ImUndo2/> Go Back</button>
              <h1 className="AboutCard__title">{name}</h1> 
                <div className="AboutCard-container">
                    <img className="AboutCard__img" src={image} alt="pic"/>
                    <ul className="AboutCard__description-container">
                        <li>Gender: {gender}</li>
                        <li>Created: {created}</li>
                        <li>Location: {location.name}</li>
                        <li>Species: {species}</li>
                        <li>Status: {status}</li>
                    </ul>
                </div>
            </div>
            
        )
    }
};

export default AboutCardView;