export default function Body() {

    return (
        <div className="body">
            <div className="list">
                <p>Meerschweinchenrassen:</p>
                <ul>
                    <li>Glatthaar</li>
                    <li>Rosette</li>
                    <li>American Crested</li>
                    <li>English Crested</li>
                    <li>Rex</li>
                    <li>Teddy</li>
                </ul>
            </div>
            <div className="buttons">
                <button id="button1">Futter</button>
                <button id="button2">Niedliche Bilder</button>
            </div>
            <div className="field">
                <p>Wie soll dein Meerschweinchen heißen?</p>
                <input id="input-text" />
            </div>
        </div>
    )
}