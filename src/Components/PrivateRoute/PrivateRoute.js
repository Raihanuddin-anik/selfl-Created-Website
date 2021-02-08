import React, { useContext ,useHistory ,useLocation} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 
   console.log(loggedInUser)
    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/singup",
              state: { from: location }
            }}
          />
        )
      }
    />
      </div>
    );
};

export default PrivateRoute;