import './../styles/main.css';
import clsx from 'clsx';
import { languages } from '../languages'
import { useState } from 'react';

export default function Main() {
    const [currentWord, setCurrentWord] = useState<string>("react");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const currentWordElements = currentWord.split("").map((char, index) => 
        <span key={index}>{char}</span>
    );

    const keyBoardElements = alphabets.split("").map(alphabet => {
        return ( 
            <button 
                key={alphabet}
                className={clsx({
                        'correct-letter' : guessedLetters.includes(alphabet) && currentWord.includes(alphabet),
                        'wrong-letter' : guessedLetters.includes(alphabet) && !currentWord.includes(alphabet)
                    })}
                onClick={() => hold(alphabet)}
            >
                {alphabet}
            </button>
        )
    })
    function hold(letter: string) {
        setGuessedLetters(prevletters => 
            prevletters.includes(letter) ? 
                prevletters : 
                [...prevletters, letter]
        )
    }
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
            <div id='current-word'>
                {currentWordElements}   
            </div>
            <div id='keyboard'>
                {keyBoardElements}
            </div>
            <button>New Game</button>
        </main>
    ) 
}