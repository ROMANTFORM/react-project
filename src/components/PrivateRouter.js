import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";



const PrivateRoute = ({
    component: Component,
    isAythenticate,
    redirectTo,
    ...routeProps
}) => (
    <Route 
        {...routeProps}
        render={props => 
            isAythenticate ? <Component {...props}/> : <Redirect to={redirectTo} />
        }
    />
);


const mapStateToProps = (state) => ({
    isAythenticate: authSelector.getIsAuthenticate(state)
});

export default connect(mapStateToProps)(PrivateRoute)