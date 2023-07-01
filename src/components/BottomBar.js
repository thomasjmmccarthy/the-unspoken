import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';

function BottomBar(props) {

  /**
   * In order to scroll to a specific section, when declaring the BottomBar element in the App.js file, include the prop:
   *      onClick={() => scrollToSection(x)}    -   Where x is the ref to the desired section
   * 
   * In order to open a link to another site, when declaring the BottomBar element in the App.js file, include the prop:
   *      link={y}    -   Where y is the link to the site to open
   */

  if(props.link !== undefined)
  {
    return(
      <a href={props.link} target='_blank' rel="noreferrer">
        <button className='BottomBar'>
          <FontAwesomeIcon icon={props.icon} />
          <p>{props.label}</p>
        </button>
      </a>
    )
  }

  else
  {
    return (
      <button className='BottomBar' onClick={props.onClick}>
        <FontAwesomeIcon icon={props.icon} />
        <p>{props.label}</p>
      </button>
    )
  }

}

export default BottomBar;