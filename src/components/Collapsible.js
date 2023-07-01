import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCollapse from "react-collapsed";

function Collapsible(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return(
    <div className={props.className}>
      <div className='collapsible' style={{backgroundColor: isExpanded? '#13151b' : '#00000000'}}>
        <div className='collapsible-header' {...getToggleProps()}>
          <h2 className='unselectable' style={{fontWeight: '600'}}>{props.header}</h2>
          <FontAwesomeIcon icon={isExpanded? faChevronUp : faChevronDown} style={{paddingRight: '30px'}}/>
        </div>
        <div {...getCollapseProps()}>
          <div style={{padding: '10px'}}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collapsible;