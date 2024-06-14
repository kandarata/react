/*
Warning: UserGreeting: Support for defaultProps will be removed 
    from function components in a future major release. 
    Use JavaScript default parameters instead.
    at UserGreeting (http://localhost:5173/src/UserGreeting.jsx?t=1718155786490:21:11)
    at App
*/

import PropTypes from 'prop-types'

function UserGreeting(props = {
    isLoggedIn: false,
    username: "Guest",
}) {

    const welcomeMessage = <h2 className="welcome-message">
        Welcome {props.username}
    </h2>

    const loginPrompt = <h2 className="login-prompt">
        Please log in to continue
    </h2>
    
    return (props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.propsTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting