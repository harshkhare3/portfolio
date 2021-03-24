import amazonClone from '../../images/amazon.jpg';
import Alan from '../../images/alan.jpg';
import Zoom from '../../images/zoom.png';
import Roster from '../../images/roster.jpg';
import Covid from '../../images/covid.jpg';


export const WebApp = [
    {
      name: "React Amazon Clone",
      imageUrl: amazonClone,
      id: 1,
      data: `It is an Amazon Clone made using React and Firebase. Its frontend is done using React and React Context API, backend is done using Firebase cloud functions and the database used is Firebase Cloud Firestore.
      <br/><br/>
      Features:-<br/><br/>
      <ul class="card__list">
        <li>Authentication feature.</li>
        <li>Product adding and removing from the basket. </li>
        <li>Orders page to show previously placed orders.</li>
        <li>Fully functional stripe payment method integrated (currently running on test keys).</li>
      </ul>`,
      tech:`<p>Tech Used - ReactJs, React Context API & Firebase.</p>`
    },
    {
      name: "Roster Project",
      imageUrl: Roster,
      id: 1,
      data: `It is a task/chore roster system for shared spaces that allows managers to set tasks, notifies users of their tasks, and allows users to mark tasks as complete.
      <br/><br/>
      Features:-<br/><br/>
      <ul class="card__list">
        <li>Authentication for managers and employees.</li>
        <li>Employees can view task, set email noti & mark a task as complete.</li>
        <li>Managers can easily set a roster acording to employees availability.</li>
      </ul>
      `,
      tech: `<p>Tech Used - JavaScript, VueJs, NodeJs & MySQL.</p>`
    },
    {
      name: "COVID-19 Tracker App",
      imageUrl: Covid,
      id: 1,
      data: `It is a COVID-19 Tracker App where you can easily track the number of people infected and recovered by COVID-19. <br/>
      All the data on this website comes from disease.sh API. <br/><br/>
      Features:-<br/><br/>
      <ul class="card__list">
        <li>Realtime data coming from disease.sh</li>
        <li>All the data is shown graphically, and on map according to the country.</li>
      </ul>
      `,
      tech: `<p>Tech Used - ReactJs</p>`
    },
    {
      name: "Zoom Flutter Clone",
      imageUrl: Zoom,
      id: 2,
      data: ``,
      tech: `<p>Tech Used - Flutter & Firebase.</p>`
    },
    {
      name: "Firebase CHat App",
      imageUrl: Zoom,
      id: 2,
      data: ``,
      tech: `<p>Tech Used - Flutter & Jitsi Meet.</p>`
    }
  ]