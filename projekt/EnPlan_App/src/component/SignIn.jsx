import React, {Component} from 'react';
import { Link } from 'react-router';

import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { firebaseApp } from '../firebase';

import timechart from '../images/timechart.png'

import { CSSTransition } from 'react-transition-group';
import '../css/sign.css';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      },
      appearHome: true,
    }
  }

  signIn(){
    //console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error)
        this.setState({error})
      })
  }
  scrollTop() {
    scroll.scrollToTop();
  }
  scrollToBottom(){
    scroll.scrollToBottom();
  }
  scrollOne(){
    scroll.scrollTo(980);
  }
  scrollTwo(){
    scroll.scrollTo(1960);
  }
  scrollThree(){
    scroll.scrollTo(2940);
  }
  scrollFour(){
    scroll.scrollTo(3920);
  }
  scrollFive(){
    scroll.scrollTo(4900);
  }

  render() {
    const { appearHome } = this.state;
    return(
      <div className="body">
        <div className="all">
        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <div className="container">
            <div className="jumbotron top">
              <h1>En Plan App</h1>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="well">
                <h4>Om applikationen</h4>
                <p>Detta är början på en planeringsapplikation skriven i React.</p>
                <p>Testa registrera dig för att logga in</p>
                <p>Mer för info: <a onClick={() => this.scrollOne()}>läs här</a></p>
              </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="well form-block">
                <h2>Logga In</h2>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="E-mail"
                    onChange={event => this.setState({email: event.target.value}) }
                    />
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Lösenord"
                      onChange={event => this.setState({password: event.target.value}) }
                    />
                    <div className="errorMessage">{this.state.error.message}</div>
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={() => this.signIn()}
                    >
                      Logga in
                    </button>
                </div>
                <div className="link"><Link to={'/signup'}>Registrera dig här</Link></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 presentation">
              <h4>Presentation</h4>
              <div className="pres">
                <a onClick={() => this.scrollToBottom()}>
                  <img className="" src="https://img.icons8.com/windows/96/000000/training.png"/>
                </a>
              </div>
              </div>
            </div>
          </div>
          </CSSTransition>
          <div className="downA">
            <a onClick={() => this.scrollOne()}>
              <img className="downArrow" src="https://img.icons8.com/windows/96/000000/circled-chevron-down.png"/>
            </a>
          </div>
        </div>
        <div className="info">
          <div className="downA">
            <a onClick={() => this.scrollTop()}>
              <img className="downArrow" src="https://img.icons8.com/windows/96/000000/circled-chevron-up.png"/>
            </a>
          </div>
          <div className="Information row">
          <br />
            <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="well">
              <h4>Appens todo-list</h4>
              <ul>
                <li>1. Göra detta till en dynamisk todo-list</li>
              </ul>
            </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="jumbotron">
              <h2>Resultat av React Applikationen</h2>
              <p>Denna webbapplikation valde jag att bygga som mitt slutprojekt i kursen Självständigt fördjupning.</p>
              <p>Webbsidan sammanfattar det jag gått igenom under mitt projekt och innehåller de delar som jag tycker är viktiga.</p>

              <hr />
              <p>Applikationen innehåller en registrering samt en logga in funktion. Registrering krävs för att kunna logga in. Man måste vara inloggad för att kunna se resten av systemet.</p>
              <p>Vid inloggad stadie kan man med hjälp av ett gränssnitt lägga till uppgifter till listor. Dessa kan också slutföras och tas bort. Uppgifternas användare är synlig.</p>
              <p>Utan att vara inloggad kan man se projektets presentation och även alla delarna utav detta projekt</p>
              <hr />
            </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="jumbotron">
              <h2>Appens arkitektur</h2>

              <p>För att kunna köra React så krävs det tillgång till Node eller liknande för att kunna skapa en server. Node är en slags JavaScript miljö som möjliggör att kunna skriva JavaScript-kod utanför en webbläsare.</p>
              <img className="Nodebild" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
              <p>React använder sig i detta projekt biblioteket Redux som hjälper dig att skriva program som beter sig aktivt, kan köras i olika miljöer (klienten & servern) och är lätta att testa.</p>
              <img className="reduxBild" src="https://redux.js.org/img/redux-logo-landscape.png" />
              <p>Projektet använder sig även av en databas som är bland annat utvecklad för att stöda React.</p>
              <img className="firebaseBild" src="https://cdn-images-1.medium.com/max/1600/1*ipwpqQrHz0Lkd_5setXQCQ.png" />
              <img className="bootstraps" src="https://www.drupal.org/files/project-images/bootstrap-stack.png" />
            </div>
            </div>
          </div>
          <div className="downA">
            <a onClick={() => this.scrollTwo()}>
              <img className="downArrow" src="https://img.icons8.com/windows/96/000000/circled-chevron-down.png"/>
            </a>
          </div>
        </div>

        <div className="bar">
          <div className="downA">
            <a onClick={() => this.scrollOne()}>
              <img className="downArrow" src="https://img.icons8.com/windows/96/000000/circled-chevron-up.png"/>
            </a>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 learn">
            <div className="well">
              <h2>Lärdommar</h2>
              <ul>
                <li>React och packet som man behöver känna till.</li>
                <li>Hur man skapar och strukturerar en modern webbapplikation.</li>
                <li>Ansvar och tidsplanering. Vilket kan vara bra inför C-uppsatsen.</li>
                <li>Hur man tar sig an nya utvecklingsmetoder.</li>
              </ul>
            </div>
            <br />
            <hr />
            <img className="timechart" src={timechart}/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 chart">
            <h2>Självständig fördjupning</h2>
            <p>Detta arbete på hög abstraktionsniva kan man säga innehöll fem olika delar. Till en början behövde jag göra <strong>efterforskning</strong> för att veta hur jag skulle gå tillväga och för att förstå React.</p>
            <p>Till min efterforskning skrev jag olika typer utav <strong>Dokumentering</strong> för att samla det jag lärt mig och upptäckt</p>
            <p>Under tider gjorde jag även olika <strong>Testprojekt</strong> för att se hur man använder React rent praktiskt och på vilka olika sätt man kan göra detta.</p>
            <p>Efter det kände jag mig redo för att börja bygga <strong>(Slutprojekt)</strong> en planerad webbapplikation för att visa det jag lärt mig med React.</p>
            <p>Tillsist skrevs en <strong>Rapport</strong> över arbetet.</p>
            <p>Projektet ligger uppe på GIT om man vi se det fullständiga projektet med alla delar inkluderade.</p>
            <a href="https://github.com/aregato/reactOnReact">https://github.com/aregato/reactOnReact</a><br/>
            <img className="git" src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png"/>
          </div>
          <br />
          <div className="downA">
            <a onClick={() => this.scrollThree()}>
              <img className="downArrow" src="https://img.icons8.com/windows/96/000000/circled-chevron-down.png"/>
            </a>
          </div>
        </div>
        <div className="info">

        <div className="downA">
          <a onClick={() => this.scrollTwo()}>
            <img className="downArrow" src="https://img.icons8.com/windows/96/000000/circled-chevron-up.png"/>
          </a>
        </div>

        <div className="container method">
        <h2>Metod</h2>
        <p>På Udemy tog jag två stycken kurser. En kurs där jag fick lära mig grunderna i React och en kurs där jag fick lära mig att skapa en modern webbapplikation med React tilsammans med Redux.</p>
        <img className="udemy" src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"/>
        <h3>React hett just nu!</h3>
        <a href="https://github.com/trending/javascript">Trändar på GitHub</a>
        <p>Mycket lätt tillgång till artiklar och rapporter om React på internet tackvare dess spridning.</p>
        </div>
        <br/><br/><br/><br/><br/><br/>
        <div className="downA">
          <a onClick={() => this.scrollFour()}>
            <img className="downArrow" src="https://img.icons8.com/windows/96/000000/circled-chevron-down.png"/>
          </a>
        </div>
        </div>
        <div className="bar">
        <div className="downA">
          <a onClick={() => this.scrollThree()}>
            <img className="downArrow" src="https://img.icons8.com/windows/96/000000/circled-chevron-up.png"/>
          </a>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
        <div className="well goal">
          <h2>Mål</h2>
          <p>Denna självständiga fördjupning handlar om att lära sig arbeta med verktyget React som spets i frontend-utvecklingen. Projektets mål är att ta fram relevant information om biblioteket och dess påverkan i en modern webbapplikation.</p>
          <p>Projektet kommer ta reda på varför React har blivit så använt bland företagen på arbetsmarknaden och varför många använder React för sina webbsidor.</p>

          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 probs">
          <h2>Problemformulering</h2>
          <ul>
            <li>HTML - oldschool?</li>
            <li>Varför React?</li>
            <ul>
              <li>Poplärt på arbetsmarknaden</li>
              <li>Använd av stora företag</li>
            </ul>
            <li>Hur bygger man en modern webbapplikation?</li>
            <li>Vilka problem löser React?</li>
          </ul>
          <img className="reactApp" src="https://static.viget.com/server-side_with_react.jpg?mtime=20160426161334"/>
        </div>
        <div className="downA">
          <a onClick={() => this.scrollFive()}>
            <img className="downArrow" src="https://img.icons8.com/windows/96/000000/circled-chevron-down.png"/>
          </a>
        </div>

        </div>
        <div className="info">
          <div className="downA">
          <a onClick={() => this.scrollFour()}>
            <img className="downArrow" src="https://img.icons8.com/windows/96/000000/circled-chevron-up.png"/>
          </a>
        </div>
        <div className="StageOne">
          <h1>ReactOnReact</h1>
          <h4>Självständig fördjupning av Hannes Linnér</h4>
          <h5>Informationsariktekt</h5>
          <h5>Malmö Universitet</h5>
          <h5>Vår 2019</h5>
          <span class="react-logo">
            <span class="nucleo"></span>
          </span>
        </div>
        </div>
      </div>
    )
  }
}

export default SignIn;
