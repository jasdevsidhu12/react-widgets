import { useState } from "react";
import Accordion from './components/accordion/Accordion';
import Search from './components/search/Search';
import Dropdown from './components/dropdown/Dropdown';
import Translate from './components/translate/Translate';


const showAccordion = () => {
  const items = [{
    title: 'What\'s React',
    content: 'React is a front end javascript framework'
  }, {
    title: 'What use React',
    content: 'React is a favourite JS Library among Engineers'
  }, {
    title: 'How do you use React',
    content: 'You use React by creating components'
  }];
  if (window.location.pathname === '/') {
    return (<Accordion items={items} />);
  }
}

const showList = () => {
  if (window.location.pathname === '/list') {
    return (<Search />);
  }
}

const showDropdown = () => {
  // const options = [{
  //   label: 'The Color Red',
  //   value: 'red'
  // }, {
  //   label: 'The Color Green',
  //   value: 'green'
  // }, {
  //   label: 'A Shade of Blue',
  //   value: 'blue'
  // }];
  // const [selected, setSelected] = useState(options[0]);
  // if (window.location.pathname === '/dropdown') {
  //   return (<Dropdown
  //     label="Select a color"
  //     options={options}
  //     onSelectedChange={setSelected}
  //     selected={selected} 
  //   />);
  // }
}


const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return (<Translate />);
  }
}



const App = () => {
  return (
    <div>
      {showAccordion()}
      {showList()}
      {showTranslate()}
      {/* {showDropdown()} */}
    </div>
  );
}

export default App;
