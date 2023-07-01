import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function MajorButton(props) {
  return (

    <a href={props.href} target='_blank' rel='noreferrer'>
      <center>
        <button className='major-button'>
          <FontAwesomeIcon icon={props.icon} size='4x' style={{color: '#5271ff'}} />
          <h2>{props.children}</h2>
        </button>
      </center>
    </a>

  )
}


function LocalButton(props) {

  if(props.mobileMenu !== true) {
    return (

      <button className='top-bar-button' onClick={props.onClick}><FontAwesomeIcon icon={props.icon} size='1x' style={{fontSize: '25px'}} /></button>
  
    )
  }
  else {
    return (

      <button className='top-bar-button mobile-menu-button' onClick={props.onClick} style={{width: '100%'}}>
        <FontAwesomeIcon icon={props.icon} size='1x' style={{fontSize: '20px'}} />
        <p>{props.label}</p>
      </button>

    )
  }
}



function GlobalButton(props) {
  
  if(props.mobileMenu !== true) {
    return (

      <a href={props.href} target='_blank' rel='noreferrer'>
        <button className='top-bar-button'><FontAwesomeIcon icon={props.icon} size='1x' style={{fontSize: '25px'}} /></button>
      </a>
  
    )
  }
  else {
    return (

      <a href={props.href}>
        <button className='top-bar-button mobile-menu-button' onClick={props.onClick} style={{width: '100%'}}>
          <FontAwesomeIcon icon={props.icon} size='1x' style={{fontSize: '20px'}} />
          <p>{props.label}</p>
        </button>
      </a>

    )
  }
}


export {
  MajorButton,
  LocalButton,
  GlobalButton
};