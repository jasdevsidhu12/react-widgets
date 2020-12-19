import { useState, useEffect } from 'react';
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import axios from 'axios';

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debounceText, setDebounceText] = useState(text);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebounceText(text);
    }, 500);
    return() => {
      clearTimeout(timerID);
    }
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debounceText,
          target: language.value,
          key: KEY
        }
      });
      console.log('here', data);
      if (data && data.data.translations) {
        setTranslated(data.data.translations[0].translatedText);
      }
    }
    doTranslation();
  }, [language, debounceText]);
  return (
    <div>
      <h1 className="ui header">
      {translated}
      </h1>
    </div>
  )
}

export default Convert;