import { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class AboutView extends Component{
    state = {
        data: []
    }

   async componentDidMount(){
     await   fetch("https://rickandmortyapi.com/api/character?page=10")
        .then(res => res.json())
        .then(data => {
            // console.log(data.results)
            this.setState({data: data.results})
        })   
    }

    render(){

        return(
            <div>
                <h1>About Page</h1>
                <ul className="About__list">
                    {this.state.data.map(item =>  (
                            <li className="About__item" key={item.id}>
                                <Link to={{
                                    pathname: `${this.props.match.url}/${item.id}`,
                                   state: {from: this.props.location}
                                }} className="About__item-container">
                                   <img className="About__img"  src={item.image} alt="pic"></img> 
                                    <span className="About__name">{item.name}</span> 
                                </Link>
                            
                            </li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}



export default withRouter(AboutView);