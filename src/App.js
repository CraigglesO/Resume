import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Notification } from 'react-notification';
import { observer } from "mobx-react"
import Vivus from "vivus";
import Connorsvg from './connor.svg';
import me from './me.png';
import './App.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';
import ReactTooltip from 'react-tooltip';

import zero     from './img/IMG_6003.JPG';
import one      from './img/IMG_0654.jpg';
import two      from './img/IMG_1471.jpg';
import three    from './img/IMG_2097.jpg';
import four     from './img/IMG_2741.jpg';
import five     from './img/IMG_3456.jpg';
import six      from './img/IMG_3477.jpg';
import seven    from './img/IMG_4221.jpg';
import eight    from './img/IMG_4658.jpg';
import nine     from './img/IMG_4766.jpg';
import ten      from './img/IMG_4906.jpg';
import eleven   from './img/IMG_5767.jpg';
import twelve   from './img/IMG_7886.jpg';
import thirteen from './img/IMG_7937.jpg';
import fourteen from './img/IMG_8590.jpg';
import fifteen  from './img/IMG_9052.jpg';
import sixteen  from './img/IMG_9282.jpg';
import badge    from './img/badge.png';

import npmData  from './npmData.json';
// const ImageMagnifier = require('react-image-magnifier');

@observer
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      permanentNotification: false
    }
  }

  componentDidMount() {
    new Vivus('Connorsvg', {
      duration: 225,
      delay: 125,
      pathTimingFunction: Vivus.EASE_OUT,
      file: Connorsvg,
      onReady: (myVivus) => {
        myVivus.el.setAttribute('width', '421.3px', 'height', '250');
      }
    });
  }

  toggleNotification() {
    this.setState({
      isActive: !this.state.isActive
    });
    setTimeout(() => {
      this.setState({
        isActive: !this.state.isActive
      });
    }, 1750);
  }

  render() {
    const { isActive } = this.state;

    const npmPackages = npmData.map((pack, index) => {
      return (
        <div key={index} className="container-fluid row-lg-6">
          <li className="npm-list col-xs-12" key={index}>
            <div className="col-md-9">
              <div>
                <span><a className="package-name" href={pack.info.homepage} target="_blank">{pack.package}</a></span>
                <span>&nbsp;&nbsp;{pack.info.version}</span>
              </div>
              <div className="description">{pack.info.description}</div>
            </div>
            <div className="col-lg-3 package-downloads">{pack.downloads} Downloads/M</div>
          </li>
        </div>
      );
    }
    );

    return (
      <div className="App">

        <Notification
          className="Notfiy"
          isActive={this.state.isActive}
          message="Copied to Clipboard"
          action=""
          title="&hearts;"
          onDismiss={this.toggleNotification.bind(this)}
          onClick={() =>  this.setState({ isActive: false })}
        />

        <div className="container-fluid hero-unit">
          <div className="row-fluid hero-unit">

            <div className="col-sm-8 content">
              <div className="top-bar">

                <div className="svg-wrap">
                    <span id="Connorsvg" />
                </div>

                <div className="name-info">
                  <FontAwesome className='font-awesome' name='info' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative', color: '#222' }} />
                  Meaning [Irish] - Strong willed or wise.
                </div>
              </div>

              <div className="col-sm-12 spacer"></div>
              <div className="col-sm-12 spacer"></div>

              <div className="col-sm-12 inside">

                <div className="col-sm-12 Education">
                  <h2>About Me</h2>
                  <hr />
                  <p className="col-sm-12 About-me">
                    Hello, my name is <span id="name">Craig Travis O’Connor</span>.

I am an engineer with international experiance and an insatiable intellectual curiosity; with a healthy focus on left minded logical and analytical processes. Able to leverage a heavy dose of physics and mathematics, specifically electronics, mechanics, statistics and differential equations.
                  </p>
                  <div className="col-sm-12 spacer"></div>
                </div>

                <div className="col-sm-12 Education">
                  <h2>Education</h2>
                  <hr />
                  <div className="col-sm-12 App-intro">
                    <div><b>B.S. Industrial Management (BSIM)</b> [2013]</div>
                    <div className="content-code"><code className="content-code">Grove City College – Grove City, Pennsylvania</code></div>
                    <br />
                    <div><b>NCEES FE Electrical Engineering</b> - Passed January 2014</div>
                    <br />
                    <b>Electrician</b> [2009] Wake Technical Community College
                    <div className="content-code"><code className="content-code">Raleigh, NC</code></div>
                    <br />
                    <div><b>OSHA</b> – 10 Hour Construction Industry Outreach</div>
                    <br />
                    <b>Self Edification</b>
                    <br />
                    <div className="col-lg-4 edification">Javascript/Node</div>
                    <div className="col-lg-4 edification">React</div>
                    <div className="col-lg-4 edification">Electron</div>
                    <div className="col-lg-4 edification">Typescript</div>
                    <div className="col-lg-4 edification">C/C++</div>
                    <div className="col-lg-4 edification">JQuery</div>
                    <div className="col-lg-4 edification">Express</div>
                    <div className="col-lg-4 edification">MobX/Redux/Flux</div>
                    <div className="col-lg-4 edification">Babel</div>
                    <div className="col-lg-4 edification">Webpack</div>
                    <div className="col-lg-4 edification">Websockets/WebRTC</div>
                    <div className="col-lg-4 edification">CRUD/REST</div>
                    <div className="col-lg-4 edification">P2P Systems</div>
                    <div className="col-lg-4 edification">DHT</div>
                    <div className="col-lg-4 edification">Raspberry Pi/Beaglebone</div>
                    <div className="col-lg-4 edification">Arch/Ubuntu/Elementary</div>
                    <div className="col-lg-4 edification">Redis/LevelUp/MongoDB</div>
                    <div className="col-sm-12 spacer"></div>

                  </div>
                </div>

                <div className="col-sm-12 Projects">
                  <h2 id="proj">Projects</h2>
                  <hr />

                  <div className="col-md-11">
                    <b><a className="package-name" href="https://github.com/CraigglesO/Algorithms-and-Machine-Learning" target="_blank">Algorithms & Machine Learning</a></b> [2016]
                    <div className="description">Using the right data structure or algorithm for the situation is an important aspect of programming. This projects is a comprehensive study of data structures and algorithms that have been researched and extensively documented.</div>
                  </div>


                  <div className="col-md-11">
                    <b><a className="package-name" href="https://github.com/CraigglesO/EmpireEngine" target="_blank">Empire (P2P Network)</a></b> [2017]
                    <div className="description">description</div>
                  </div>

                  <div className="col-md-11">
                    <b><a className="package-name" href="https://github.com/CraigglesO/webRTC-Socket" target="_blank">WebRTC Project</a></b> [2017]
                    <div className="description">Uses Websockets to send WebRTC data to and from users. The general purpose of this project was to simplify the use of the WebRTC protocol. Very easy setup and go.</div>
                  </div>

                  <div className="col-md-11">
                    <b><a className="package-name" href="https://github.com/CraigglesO/ExampleDocs" target="_blank">Docs from MD files</a></b> [2017]
                    <div className="description">The idea behind this project was to make it as simple as possible to hit the ground running making documentation for your API.</div>
                  </div>

                  <div className="col-md-11">
                    <b><a className="package-name" href="https://github.com/CraigglesO/TypeScript-Ready" target="_blank">Typescript Ready</a></b> - Bootstrap [2017]
                    <div className="description">Dependency free method to get you up and going with typescript with one command.</div>
                  </div>

                  <div className="col-sm-12 spacer"></div>
                </div>

                <div className="col-sm-12 NPM-packages">
                  <h2 id="npm">Top 5 Downloaded NPM Packages</h2>
                  <hr />
                  <ul>{npmPackages}</ul>
                  <div className="col-sm-12 spacer"></div>
                </div>

                <div className="col-sm-12 Work">
                  <h2 id="work">Work Experience</h2>
                  <hr />
                  <b style={{fontSize: '27px'}}>Project Coordinator</b> <i>January 2016 – May 2016</i>
                  <div className="content-code"><code className="content-code">Advance Construction – Phnom Penh, Cambodia</code></div>
                   <ul className="descript-work">
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />General Contractor: Project Coordinator for the redevelopment of the Phnom Penh Airport.</li>
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Worked with almost 50 clienteles all over the world on agreeable contracts, scheduling, and substantial completion certificates.</li>
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Solved unique engineering problems to assist clients during their R&D phase.</li>
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Coordinated with 5 contractors, 3 subcontractors, 2 site supervisors, and 40+ workers to complete the project safely, efficiently, and on time.</li>
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Tracked the progress and quality of work being performed by designers and construction workers.</li>
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Used project scheduling and controlling tools to monitor projects plans, work hours, budgets and expenditures.</li>
                   </ul>
                  <br />
                  <b style={{fontSize: '27px'}}>Project Manager / EHS Engineer</b> <i>September 2015 – January 2016</i>
                  <div className="content-code"><code className="content-code">Muraya DEC – Shanghai, China</code></div>
                   <ul className="descript-work">
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Responsible and accountable for the coordinated management of multiple related projects directed toward strategic business and other organizational objectives.</li>
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Define and initiate projects and manage cost, schedule, and performance of component projects, while working to ensure the ultimate success and acceptance of the program. </li>
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Maintain continuous alignment of program scope with strategic business objectives, and make recommendations to modify the program to enhance effectiveness toward the business result or strategic intent.</li>
                   </ul>
                  <br />
                  <b style={{fontSize: '27px'}}>Field Engineer / Contractor</b> <i>January 2015 – September 2015</i>
                  <div className="content-code"><code className="content-code">Brook Consultants Inc – Plano, Texas</code></div>
                   <ul className="descript-work">
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Auditing/surveying sites with detailed reporting and record keeping of the compound and its components for Sprint.</li>
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Decommissioning and/or optimization for the primary build constituents. Alarm systems installation and testing. MMBS and BBU troubleshooting. </li>
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Comprehension and analysis required for the following systems: LTE/CDMA/GPS/DC, Power/Grounding/Battery/Microwave/RF(RRUand Antenna)/Fiber/etc.</li>
                   </ul>
                  <br />
                  <b style={{fontSize: '27px'}}>Tower Technician II</b>
                  <div className="content-code"><code className="content-code">Com-Tech – Indianapolis, Indiana</code></div>
                  <div><i>July 2014 – January 2015</i></div>
                   <ul className="descript-work">
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />AT&T installation of LTE/UMTS upgrades both RRU and TMA as well as cabinet work. Sprint installation of LTE/CMDA upgrades and site auditing. Verizon installation of PCS/AWS/UMTS upgrades. Stacked monopole. Tower Modifications. Troubleshooting. Setting rets. Site mapping. Tiger team work.</li>
                   </ul>
                  <br />
                  <div className="content-code"><code className="content-code">Nexius – Pittsburgh, PA</code></div>
                  <div><i>May 2014 – July 2014</i></div>
                   <ul className="descript-work">
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Perform grounding, terminations, fastening, proper bolting and antioxidant use, support of leads, assist on overall job on ground work, tasks required to build and install a site per customer specs, maintain safe work environment, continue to work towards training and certifications, read and understand drawings, piping diagrams, mounting specs, testing procedures, etc. Working in a team environment.</li>
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Training: OSHA-10/R.F. Testing/Hazard Chemicals/CPR-FirstAid/Tower Climb&Rescue/Rigging/Gravitec/Defensive Driving/Sprint 2.5</li>
                   </ul>
                  <br />
                  <b style={{fontSize: '27px'}}>Lifeguard</b> <i>Summer 2006 – 2012</i>
                  <div className="content-code"><code className="content-code">Tucker Lake Recreation – Benson, NC</code></div>
                   <ul className="descript-work">
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Certified Lifeguard / CPR / First Aid, averaged 6 rescues per week</li>
                     <li><FontAwesome className='bullet-point' name='chevron-right' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />Trained new lifeguards & coordinated drill exercises</li>
                   </ul>
                  <br />
                </div>
                <div className="col-sm-12 spacer"></div>


                FIN.
              </div>
            </div>



            <ReactTooltip place="left" effect="solid" offset={{top: -13, right: 0}}/>


            <div className="col-xs-4 right-fixed-me text-center">
                <img src={me} className="me-logo" alt="logo" />
                <div className="click-bait">
                  <a href="https://twitter.com/CraigglesO" title="Twitter" target="_blank">
                    <FontAwesome className='font-awesome' name='twitter' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                  </a>
                  <a href="https://github.com/CraigglesO" title="Github" target="_blank">
                    <FontAwesome className='font-awesome' name='github' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                  </a>
                  <a href="https://www.npmjs.com/~oconnorct1" title="NPM" target="_blank">
                    <FontAwesome className='font-awesome' name='terminal' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                  </a>
                  <a href="https://www.linkedin.com/in/craig-o-connor-333b81a9/" title="LinkedIn" target="_blank">
                    <FontAwesome className='font-awesome' name='linkedin' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                  </a>
                  <a href="http://stackoverflow.com/users/6194494/craig-oconnor" title="Stack Overflow" target="_blank">
                    <FontAwesome className='font-awesome' name='stack-overflow' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                  </a>
                  <a href="mailto:oconnorct1@gmail.com?subject=Hello Friend" target="_top">
                    <FontAwesome className='font-awesome' name='envelope-o' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                  </a>
                </div>
                <div className="life-text">
                  <div className="life">Born {this.props.store.days}d, {this.props.store.hours}h, {this.props.store.minutes}m, and {this.props.store.seconds}s ago</div>
                </div>
                <div className="footer-text">
                  <div className="coinbase">
                    <div className="coinName">Bitcoin</div>
                    <CopyToClipboard text="1Cci3XkZ1Rmox8x4X1W4KudUmn8izwoEsW">
                      <code data-tip="Click to Copy to Clipboard" onClick={this.toggleNotification.bind(this)} children={!isActive ? "Show notification" : "Hide notification"} style={{ textAlign: 'center' }}>1Cci3XkZ1Rmox8x4X1W4KudUmn8izwoEsW</code>
                    </CopyToClipboard>
                  </div>
                  <div className="coinbase">
                    <div className="coinName">Ethereum</div>
                    {/* <img src={eth} className="coins" alt="Ethereum" /> */}
                    <CopyToClipboard text="0xb89b478e5548Dcf99d9cd21946c008300Ea3F223">
                      <code data-tip="Click to Copy to Clipboard" onClick={this.toggleNotification.bind(this)} children={!isActive ? "Show notification" : "Hide notification"}>0xb89b478e5548Dcf99d9cd21946c008300Ea3F223</code>
                    </CopyToClipboard>
                  </div>
                  <div className="col-sm-12 spacer"></div>
                  <div className="col-sm-12 spacer"></div>
                  <div className="col-sm-12 spacer"></div>
                  <div className="Badges">
                    Acheivements
                    <ul>
                      <li className="lang achieve">
                        <a href="https://www.hackerrank.com/oconnorct1"><img src={badge} alt="travels" /></a>
                        <div>91st percentile</div>
                      </li>
                    </ul>
                  </div>
                  <div className="Languages">
                    Languages
                    <ul>
                      <li className="lang">English - Fluent</li>
                      <li className="lang">Japanese [日本語] - Intermediate</li>
                    </ul>
                  </div>
                  <div className="Photos">
                    Explorations
                    <div className="text-center">
                      <img src={zero} className="travels" alt="travels" />
                      <img src={one} className="travels" alt="travels" />
                      <img src={two} className="travels" alt="travels" />
                      <img src={three} className="travels" alt="travels" />
                      <img src={four} className="travels" alt="travels" />
                      <img src={five} className="travels" alt="travels" />
                      <img src={six} className="travels" alt="travels" />
                      <img src={seven} className="travels" alt="travels" />
                      <img src={eight} className="travels" alt="travels" />
                      <img src={nine} className="travels" alt="travels" />
                      <img src={ten} className="travels" alt="travels" />
                      <img src={eleven} className="travels" alt="travels" />
                      <img src={twelve} className="travels" alt="travels" />
                      <img src={thirteen} className="travels" alt="travels" />
                      <img src={fourteen} className="travels" alt="travels" />
                      <img src={fifteen} className="travels" alt="travels" />
                      <img src={sixteen} className="travels" alt="travels" />
                    </div>
                  </div>
                </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}


export default App;
