import { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Convert from './Convert';

const options = [{
  label: 'Afrikaans',
  value: 'af'
}, {
  label: 'Arabic',
  value: 'ar'
}, {
  label: 'Hindi',
  value: 'hi'
}];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  const onInputChange = (event) => {
    setText(event.target.value);
  };
  return(
    <div>
       <h1>Translate</h1>
       <div className="ui form">
         <div className="field">
           <label>Enter Text: </label>
           <input value={text} onChange={onInputChange}/>
         </div>
       </div>
      <Dropdown
        label="Select a Language: "
        options={options} 
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">
        Output:
      </h3>
      <Convert language={language} text={text} />
    </div>
  );
}

export default Translate;