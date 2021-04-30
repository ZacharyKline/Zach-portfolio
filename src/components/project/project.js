

function Project(props) {
    return (
        <div className='singleProject'>
            <h2>{props.title}</h2>
            <img src={props.picture} />
            <p>{props.description}</p>
        </div>
    )
}

export default Project