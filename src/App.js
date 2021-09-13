import './App.css';
import emojiLib from 'node-emoji';
import { useState } from 'react';

export default function App() {
  const [emoji, setEmoji] = useState('🔥');
  const [emojiChoice, setEmojiChoice] = useState('');

  return (
    <div className="App">
      <h1>Random Emoji Generator</h1>
      <div>
        <span role="img" aria-label="random emoji">
          {emoji}
        </span>
      </div>

      <input
        value={emojiChoice}
        onChange={(event) => {
          // console.log('event ->>', event);
          console.log(
            'event.currentTarget.value ->>',
            event.currentTarget.value,
          );
          const userInput = event.currentTarget.value;
          setEmojiChoice(userInput);
        }}
      />

      <br />
      <button
        onClick={() => {
          if (emojiLib.hasEmoji(emojiChoice)) {
            // Set an emoji based on user input
            const userEmoji = emojiLib.get(emojiChoice);
            setEmoji(userEmoji);
          } else {
            // Set a completely random emoji
            setEmoji(emojiLib.random().emoji);
          }
        }}
      >
        Generate
      </button>
    </div>
  );
}
