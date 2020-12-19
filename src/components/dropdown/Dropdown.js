import { useEffect, useRef, useState } from "react";

const Dropdown = ({options, selected, onSelectedChange, label}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = document.body.addEventListener('click', (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    }, {capture: true});
    // return is like a 'clean-up' function, it gets called fist whenever useEffect gets call second time onwards
    return() => {
      console.log('get called');
      document.body.removeEventListener('click', onBodyClick);
    }
  }, []);
  const renderOptions = options
  .filter(data => data.value !== selected.value)
  .map((data) => {
    return(
      <div key={data.value} className="item" onClick={() => onSelectedChange(data) }>
        {data.label}
      </div>
    );
  });
  return(
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div onClick={ () => setOpen(!open) } className={`ui selection dropdown ${ open ? 'visible active' : '' }`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${ open ? 'visible transition': '' }`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dropdown;