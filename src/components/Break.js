import unspokenMobileImage from '../resources/unspoken-mobile-image.gif';


function Break(props) {

  if (props.isNarrow)
  {
    return (
      <div>
        <img src={unspokenMobileImage} alt='The Unspoken Logo' width='100%' height='auto'/>
      </div>
    );
  }

  return(
    <div style={{...{height: '100vh'}}}/>
  )
}

export default Break;