import './../styles/main.css';
import { languages } from '../languages'
export default function Main() {
    const languagesElements = languages.map(language => 
                                <div 
                                    key={language.name}
                                    style={{
                                        backgroundColor: language.backgroundColor,
                                        color: language.color
                                    }}
                                >
                                    {language.name}
                                </div>)
    return (
        <main>
            <section id='win-status'>
                <p>You win!</p>
                <span>Well done! 🎉</span>
            </section>
            <div id='languages'>
                {languagesElements}
            </div>
        </main>
    ) 
}