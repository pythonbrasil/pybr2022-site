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
        <nav id="language-switch">
          <ul>
            {LANGUAGES.map(({id, label}) => (
              <li className={id === theme.state.languageId ? 'active' : ''}>
                  <button onClick={() => onLanguageChangeHandler(id, theme)}>
                    {label}
                  </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </GeneralContext.Consumer>
  )
}

export default LanguageSwitch