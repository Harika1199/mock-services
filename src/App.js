import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="section1">
        <div className="header">
          <h1>MOCK SERVICES</h1>
        </div>
        <div className="add-input">
          <input type="url" placeholder="Enter URL" name="url"  autoFocus={true} required/>
          <button>ADD</button>
        </div>
      </div>
      <div className="section2">
        <div className="url-list">
          <h2>Saved Urls</h2>
          <div className="list-div">
            <ul>
              <li>http://youtube.com</li>
              <li>http://google.com</li>
              <li>http://linkedin.com</li>
              <li>http://facebook.com</li>
            </ul>
          </div>
        </div>
        <div className="response">
          <h2 className="response-heading">Response</h2>
          <div className="response-text">
            <p>Response will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
