import "./Feature.css"


export default function Feature(props){
    return(
        <div>
            <div className="full">
                <div className="logo">{props.logo}</div>
                <div className="name">{props.featureName}</div>
            </div>
        </div>
    )
}