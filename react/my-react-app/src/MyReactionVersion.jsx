import PropTypes from 'prop-types'

function MyReactVersion(
    props = {
        version: 18,
    }) { 
    
    return (
        
            Number.isFinite(props.version)
            ? <h1>React {props.version} version</h1>
            : null
        
    )
}

MyReactVersion.propTypes = {
    version: PropTypes.number,
}

export default MyReactVersion