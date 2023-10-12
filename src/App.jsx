// Assets
import userIcon from './assets/svg/account.svg';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <div className="App__container__header">
          <div>
            <h1>SimpleWheels</h1>
            <img src={userIcon} alt="user icon" />
          </div>
          <p>
            Thanks for your order <span>#2357654</span>, your package will be on it&apos;s way shortly.
          </p>
        </div>

        <div className="App__container__main">
          <ul className="App__container__main__list">
            <li>
              <p>Chapelli Vintage Single Speed</p>
              <span>$317</span>
            </li>
            <li>
              <p>
                Castelli Arenberg Gel Gloves
              </p>
              <span>$39</span>
            </li>
          </ul>
          <div className="App__container__main__total">
            <p>Total</p>
            <span>$356</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
