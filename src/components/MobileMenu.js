import { faChevronUp, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function MobileMenu(props) {
  const getCollapseProps = props.getCollapseProps;
  const getToggleProps = props.getToggleProps;
  const isExpanded = props.isExpanded;

  return(
    <div className={props.className} style={{width: '100%'}}>
      <div className='mobile-menu-header top-bar-button' {...getToggleProps()}>
        <FontAwesomeIcon icon={isExpanded? faChevronUp : faBars} style={{...{paddingRight: '30px'},...{fontSize: '25px'}}} />
      </div>
      <div {...getCollapseProps()}>
        <div style={{padding: '10px'}}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;