type myProfile = {
    name: string
    codelang: string
    level: string
}

export default function Profile(props: myProfile) {

    return (

        <div className="body blog-entry">
            <h3>My Profile</h3>
            <ul>
                <li>Name: {props.name}</li>
                <li>Language: {props.codelang}</li>
                <li>Level: {props.level}</li>
            </ul>
        </div>
    )
}