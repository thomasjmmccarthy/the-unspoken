import { faTicket, faUsers, faBookOpen, faBookOpenReader, faFileLines } from '@fortawesome/free-solid-svg-icons';
import dramaSocLogo from '../resources/dramasoc-logo.png';
import Collapsible from './Collapsible';
import { MajorButton } from './SpecialButtons';
import ThankYouImage from '../resources/Thank-You.png';
import ShowImages from '../resources/show-images.png';
import TeamImage from '../resources/the-team-bw.jpg';

import awardMVI from '../resources/awards/award_mvi.png';
import awardBI from '../resources/awards/award_bi.png';
import awardMID from '../resources/awards/award_mid.png';
import awardMLC from '../resources/awards/award_mlc.png';



/** SHOW DESCRIPTION */

function ShowDescription() {
  return (

    <div>
      <h1>In the dark underbelly of New York City, a power struggle is brewing.</h1>
      <p>
        The year is 1929.  Deep in the heart of New York City, the Solitary West
        speakeasy serves illegal alcohol to anyone who dares knock on its doors.<br/>
        The Unspoken follows an unnamed waiter as he recounts his rise from lowly
        bartender to one of the heads of the bootlegging trade. But, when his past comes
        back to haunt him, and his web of lies begins to collapse, he must demonstrate
        just how far he will go to keep hold of his power.<br/>
        Set against the stark backdrop of American Prohibition and the Great Depression,
        The Unspoken spins a dark tale about loss, ambition, betrayal, and the fruitlessness
        of the American Dream.
      </p>
    </div>

  )
}


/** SHOW RECORDING */

function ShowRecording(props) {
  return (
    <div className={'youtube-embed' + (props.isNarrow? '-narrow' : '')}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/_aYDffd0J10" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen 
      />
    </div>
  )
}



/** The show's awards! */
function Awards() {
  return (
    <div style={{width: '100%'}}>
      <img className='award-image' src={awardMVI} width='50%' alt='award'/>
      <img className='award-image' src={awardBI} width='50%' alt='award'/>
      <img className='award-image' src={awardMID} width='50%' alt='award'/>
      <img className='award-image' src={awardMLC} width='50%' alt='award'/>
    </div>
  )
}



/** A Thank you message */

function ThankYou(props) {
  return (
    <div>
      <img src={ThankYouImage} width='100%' alt='thank you' />
      <p style={{paddingBottom: '20px'}}>
        The Solitary West is closed for business now, but we'll never 
        forget the memories we made putting this show together. Thank you 
        to everybody who came and supported us - we hope you enjoyed watching 
        it just as much as we enjoyed making it! <br/><br/>
        And to the cast and crew, I simply cannot thank you enough. This show simply wouldn't have 
        been possible without you. The time, dedication, and most importantly, the 
        energy and fun that you all brought to this project has been incredible. 
        There's no-one else I'd rather have worked on this with over you guys. From 
        being a dumb little A-level devised project I came up with all those years ago,
        to actually seeing it come to life, this has been a once-in-a-lifetime experience.
        I wish you all the best for the future. To the Number Seventeen!<br/><br/>
        - Tommo<br/>
        <i className='details'>Writer/Director</i>
      </p>
      <MajorButton href="https://www.canva.com/design/DAFXqY2ibBE/MAMbUfTT3oeifNhSHRAq9A/view?utm_content=DAFXqY2ibBE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" icon={faFileLines}>
        Digital Programme
      </MajorButton>
      <MajorButton href="https://drive.google.com/file/d/1XYMIjUuixG3RIagE7SxNkFnmFrxacBEZ/view?usp=sharing" icon={faBookOpen}>
        The Script
      </MajorButton>
      <img src={ShowImages} width='100%' alt='show images'/>
      <img src={TeamImage} width='100%' alt='the team'/>
    </div>
  )
}



/** TICKETS NOW AVAILABLE PAGE */

function Tickets(props) {
  return (

    <div>
      <h1>TICKETS NOW AVAILABLE</h1>
      <p>Tickets for <i>The Unspoken</i> are now available!<br/><br/>
      Showings:<br/>
      Friday 3rd | Saturday 4th | Sunday 5th of March 2023.<br/>
      Doors open at 7:15pm<br/><br/></p>

      <MajorButton href={props.ticketLink} icon={faTicket}>
        Click here to<br/> get your<br/>tickets
      </MajorButton>

      <br/>
      <p>Tickets are organised by the <a href='https://www.yorkdramasoc.com/' target='_blank' rel='noreferrer'>University of York Drama Society</a>, and are made available via TicketSource.</p>
    </div>

  )
}



/** TICKETS SOON TO BE AVAILABLE */
function TicketsPlaceholder() {
  return(

    <div>
      <h1>Ticket Information</h1>
      <p>Tickets for <i>The Unspoken</i> are not yet available, but they will be soon!<br/>
      Keep an eye out on our socials to find out when you can get yours!<br/><br/>
      Showings:<br/>
      Friday 3rd | Saturday 4th | Sunday 5th of March 2023.<br/><br/>
      Tickets are organised by the <a href='https://www.yorkdramasoc.com/' target='_blank' rel='noreferrer'>University of York Drama Society</a>
      </p>
      <br/>
    </div>

  )
}



/** PROD TEAM APPLICATIONS */

function ProdTeamApplication(props) {
  return (

    <div>
      <h1>Prod Team Applications</h1>
      <p>We have extended the prod team application deadline for some of our roles!<br/>
      NEW DEADLINE : Midday Friday, 16th December 2022
      <br/><br/></p>

      <MajorButton icon={faBookOpenReader} href='https://docs.google.com/document/d/1784KINwsWI2WjYet4bKfdwaWsQlsqTRAW7vhd8q8p6U/edit?usp=sharing'>
        Prod Team Pack
      </MajorButton>
      <br />
      <MajorButton icon={faUsers} href='https://forms.gle/AKUXYc3NeiuSAeca9'>
        Prod Team<br/>Application Form
      </MajorButton>
      <br/>
    </div>

  )
}



/** AUDITION PACK */

function AuditionPack(props) {
  return(

    <div>
      <h1>Audition Pack</h1>
      <p>Our auditions are now running!<br/>
      Click the button below to go to our audition pack:
      <br/><br/></p>

      <MajorButton href={props.auditionPackLink} icon={faBookOpen}>
       Our Audition Pack
      </MajorButton>
      <br />
      <p>
        We are running walk-in auditions on Tuesday, 29th November from 8pm-9:30pm
        in PZA/110
      </p>
    </div>

  )
}



/** COMPANY */

function AdditionalInformation(props) {

  return (

    <div>
      <h1>Additional Information</h1>
      <i className='details'>Click on a heading to expand.</i>

      { props.infoData.company? (<Company isNarrow={props.isNarrow} />) : null }
      { props.infoData.venue? (<VenueDetails />) : null }
      { props.infoData.contact? (<ContactDetails />) : null }
    </div>

  )
}



/** ADDITIONAL INFORMATION > COMPANY */

function Company(props){

  const execProd = (
    <div>
      <h3>Executive Production Team</h3>
      <CompanyMember role='Written & Directed By'   name='Tommo McCarthy'/>
      <CompanyMember role='Assistant Directed By'   name='Amber Moore'/>
      <CompanyMember role='Produced By'             name='Esther Bishop'/>
    </div>
  )

  const cast = (
    <div>
      <h3>Performing Company</h3>
      <center>
        <CompanyList isNarrow={props.isNarrow}>
          <CompanyMember role='The Waiter'              name='Luke McDonald'/>
          <CompanyMember role='Carmen'                  name='Monica Yell'/>
          <CompanyMember role='Billy'                   name='Luke Berridge'/>
          <CompanyMember role='Mabel'                   name='Ellie-Mae Rooke'/>
          <CompanyMember role='Clyde'                   name='Zac Ribbins'/>
          <CompanyMember role='Marco'                   name='Will Osbon'/>
          <CompanyMember role='Saoirse'                 name='Claire Cole'/>
          <CompanyMember role='Harold Morris'           name='Sam Bellamy'/>
          <CompanyMember role='Evelyn'                  name='Ellie Carrier'/>
        </CompanyList>
      </center>
    </div>
  )

  const crew = (
    <div>
      <h3>Production Team</h3>
      <center>
        <CompanyList isNarrow={props.isNarrow}>
          <CompanyMember role='Set Constructor'         name='Harvey Kitchen'/>
          <CompanyMember role='Set Dresser'             name='Dan Sinclair'/>
          <CompanyMember role='Stage & Props Manager'   name='Ella Perriss'/>
          <CompanyMember role='Lighting Designers'      name='Maisy Arline S' secondname='Jamie Waters'/>
          <CompanyMember role='Sound Designer'          name='Niamh Evans'/>
          <CompanyMember role='Costume, Hair & Make-Up' name='Priya Lahiri'/>
          <CompanyMember role='Dialect Coach'           name='Will Osbon'/>
          <CompanyMember role='Movement Choreographer'  name='Ellie Pearson'/>
          <CompanyMember role='Fight Coordinator'       name='Yogi Sylvain'/>
          <CompanyMember role='Intimacy Coordinator'    name='Chesca Downes'/>
          <CompanyMember role='Press & Publicity'       name='Ezri Mannion'/>
          <CompanyMember role='Photographer'            name='Rohit Jayade'/>
          <CompanyMember role='Videographer'            name='Zac Horn'/>  
        </CompanyList>
      </center>
    </div>
  )

  return (
    <Collapsible header='Meet the Company'>
      {execProd}
      {cast}
      {crew}
    </Collapsible>
  )
}

function CompanyMember(props) {
  const secondname = props.secondname !== undefined? (
    <div style={{paddingTop: '10px'}}>{props.secondname}</div>
  ) : null;
  return (
    <center className='CompanyMember'>
      <div><h4>{props.role}</h4></div>
      <div>{props.name}</div>
      {secondname}
    </center>
  )
}

function CompanyList(props) {

  const companyList = props.children.map((companyMember, index) => {
    if(props.isNarrow)
    {
      return (
        <div className='company-list'>
          <div style={{width: '100%'}}>
            {companyMember}
          </div>
        </div>
      )
    }
    else
    {
      if(index % 2 === 0)
      {
        return (
          <div className='company-list'>

            <div style={{width: '50%'}}>
              {companyMember}
            </div>
            
            {props.children[index + 1] ? (
              <div style={{width: '50%'}}>{props.children[index + 1]}</div>
            ) : null}

          </div>
        )
      }
      else{
        return null;
      }
    }
  })

  return companyList;
}



/** ADDITIONAL INFORMATION > CONTENT WARNINGS */

function ContentWarnings() {

  return (

    <Collapsible header='Content Warnings'>
      <p>Please be aware that <i>The Unspoken</i> contains the following. For further details, please get in touch (see 'Contact Us').</p>
      <Warning label='Addiction'        level='p' />
      <Warning label='Alcoholism'       level='p' />
      <Warning label='Blackmail'        level='p' />
      <Warning label='Blood'            level='p' />
      <Warning label='Cancer'           level='m' />
      <Warning label='Classism'         level='p' />
      <Warning label='Corpses'          level='m' />
      <Warning label='Death/Dying'      level='p' />
      <Warning label='Debt'             level='m' />
      <Warning label='Drug Use'         level='m' />
      <Warning label='Forced Outing'    level='p' />
      <Warning label='Gang Violence'    level='p' />
      <Warning label='Grief'            level='p' />
      <Warning label='Guns'             level='p' />
      <Warning label='Hallucination'    level='m' />
      <Warning label='Haze'             level='p' />
      <Warning label='Head Injury'      level='p' />
      <Warning label='Homophobia'       level='p' />
      <Warning label='Hospitalisation'  level='m' />
      <Warning label='Loud Noises'      level='p' />
      <Warning label='Mental Illness'   level='p' />
      <Warning label='Murder'           level='p' />
      <Warning label='Mutilation'       level='p' />
      <Warning label='Physical Abuse'   level='m' />
      <Warning label='Pregnancy'        level='p' />
      <Warning label='Prostitution'     level='m' />
      <Warning label='Scars'            level='m' />
      <Warning label='Sexism'           level='p' />
      <Warning label='Sexual Assault'   level='m' />
      <Warning label='Smoking'          level='p' />
      <Warning label='Strong Language'  level='p' />
      <Warning label='Terminal Illness' level='m' />
      <Warning label='Torture'          level='m' />
      <Warning label='Violence'         level='p' />
      <Warning label='War'              level='m' />
      <Warning label='Xenophobia'       level='p' />
    </Collapsible>

  )
}

function Warning(props) {

  const present = props.level === 'p'? 'Present' : 'Mentioned'
  return (

    <center>
      <div className='ContentWarning'>
        <div style={{...{width: '49%'},...{textAlign: 'left'}}}><b>{props.label}</b></div>
        <div style={{...{width: '2%'},...{color: '#777777'}}}>-</div>
        <div style={{...{width: '49%'},...{textAlign: 'right'},...{color: '#777777'}}}><i>{present}</i></div>
      </div>
    </center>

  )
}



/** ADDITIONAL INFORMATION > VENUE / ACCESSIBILITY */

function VenueDetails() {

  return (

    <Collapsible header='The Venue / Accessibility'>
      <center>
        <VenueMap />
        <p>
          The Drama Barn <br/>
          Vanbrugh College, Vanbrugh Way, York <br/>
          YO10 5DD
        </p>
      </center>
      <p>
        <br/>The Drama Barn is a small venue, with a seating capacity of approximately 40 people. <br/><br/>
        This venue is wheelchair accessible. Content warnings and health and safety notices are listed on this site,
        on our TicketSource page, and at the entrance to the venue on show nights.<br/>
        If you have any questions regarding accessibility please get in touch with DramaSoc via
        their email: <a href='mailto:dramasoc@yusu.org'>dramasoc@yusu.org</a><br/><br/>
      </p>
    </Collapsible>

  )
}

function VenueMap() {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe title='drama-barn-venue-map' width="450" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=The%20Drama%20Barn&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
        <style>{`
          .mapouter{
            position:relative;
            text-align:right;
            height:350px;
            width:80%;
          }
        `}</style>
        <a href="https://www.embedgooglemap.net">google maps api html</a>
        <style>{`
          .gmap_canvas {
            overflow:hidden;
            background:none!important;
            height:350px;
            width:100%;
          }
        `}</style>
      </div>
    </div>
  )
}



/** ADDITIONAL INFORMATION > CONTACT DETAILS */

function ContactDetails() {

  return (
     <Collapsible header='Contact Us'>
      <p>
        Please feel free to get in touch regarding any questions/queries that you have.<br/><br/>

        For content-related enquiries, please email the director, Tommo McCarthy, at:<br/>
        <center><a href='mailto:tm1472@york.ac.uk'>tm1472@york.ac.uk</a></center><br/><br/>
        
        For venue/accessibility enquiries, please get in touch with the University of York
        Drama Society, at:<br/>
        <center><a href='mailto:dramasoc@yusu.org'>dramasoc@yusu.org</a></center>
      </p>
    </Collapsible>

  )
}



/** SPOTIFY PLAYLIST */
function ShowPlaylist() {

  return (

    <iframe title='spotify-playlist'
      style={{borderRadius: '5px'}}
      src="https://open.spotify.com/embed/playlist/27U9D9dvGfPbsdtVjwKpT1?utm_source=generator&theme=0"
      width="100%"
      height="80"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />

  )

}



/** WEB PAGE FOOTER */

function Footer() {

  return (

    <div className='footer'>
      <i className='footer-credits details'>Website designed and developed by Tommo McCarthy</i>
      <a href='https://www.yorkdramasoc.com/' target='_blank' rel='noreferrer'><img src={dramaSocLogo} alt='York Drama Society Logo' width='100px'/></a>
    </div>

  )
}



export {
  ShowDescription,
  ShowRecording,
  Awards,
  ThankYou,
  Tickets,
  ContentWarnings,
  TicketsPlaceholder,
  ProdTeamApplication,
  AuditionPack,
  AdditionalInformation,
  ShowPlaylist,
  Footer
};