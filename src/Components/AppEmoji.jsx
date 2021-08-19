import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const AppEmoji = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    return (
        <div>
            <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '100%' }} />
        </div>
    );
};
export default AppEmoji