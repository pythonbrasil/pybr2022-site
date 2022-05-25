import React from 'react'
import LANGUAGES from "@configs/languages";
import GeneralContext from "@configs/context";
import './style.scss';

const LanguageSwitch = () => {
  const onLanguageChangeHandler = (languageId, theme) => {
    theme.setState({
      ...theme.state,
      languageId
    })
  }

  return (
    <GeneralContext.Consumer>
      {theme => (
        <div id="language-switch">
          <ul className='language-switch__list'>
            {LANGUAGES.map(({id, label}) => (
              <li className={id === theme.state.languageId ? 'active' : ''}>
                  <button onClick={() => onLanguageChangeHandler(id, theme)}>
                    {label}
                  </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </GeneralContext.Consumer>
  )
}

export default LanguageSwitch