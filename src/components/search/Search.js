import { useState, useEffect } from 'react';
import axios from 'axios';

// en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming
const Search = () => {
  const [term, setTerm] = useState('sai');
  const [debounceTerm, setDebounceTerm] = useState(term);
  const [result, setResults] = useState([]);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebounceTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerID);
    }
  }, [term])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debounceTerm
        }
      });
      if (data.query) {
        setResults(data.query.search);
      }
    }
    search();
  }, [debounceTerm]);

  const inputOnChange = (event) => {
    setTerm(event.target.value);
  }
  const renderResult = result.map((result) => {
    return (
    <div className="item" key={result.pageid}>
      <div className="right floated content">
        <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} rel="noreferrer" target="_blank">
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">
          {result.title}
        </div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
      </div>
    </div>
    );
  })
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>
            Enter Search Term
        </label>
          <input
            className="input"
            value={term}
            onChange={inputOnChange}
            />
        </div>
      </div>
      <div className="ui celled list">
        {renderResult}
      </div>
    </div>
  );
}
export default Search;