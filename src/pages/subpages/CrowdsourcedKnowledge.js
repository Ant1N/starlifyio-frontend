import React from 'react';
import SubpageHeader from '../../components/SubpageHeader';
import Footer from '../../components/Footer';

function CrowdsourcedKnowledge() {
  return (
    <div>
      <div className="subpages__container">
        <SubpageHeader
          url="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/crowdsourced-knowledge.png"
          alt="Crowdsourced knowledge"
        ></SubpageHeader>
        <div className="site__container">
          <div className="subpages__center-text-container">
            <h1>Crowdsourced knowledge</h1>
            <h2>Shared knowledge is power</h2>
            <p>
              We believe that the most innovative solutions come from shared
              knowledge and collective efforts. That's why you get the most out
              of Entiros Starlify by crowdsourcing.
            </p>
            <p>
              Working together, across teams, to build, manage, and improve your
              application network will lead to a more collective knowledge and
              stronger innovation power . It's everything your developers need
              to carry out their best integration work.
            </p>
          </div>
          <div className="subpages__information-container">
            <div className="subpages__information-text">
              <h2>Share the fun</h2>
              <p>
                Application networks can be shared inside and outside of your
                organization. Invitations are just a click away and allow other
                users to view and edit your networks.
              </p>
              <p>
                In a shared workspace, you can invite your team or your entire
                company to collaborate in multiple networks.
              </p>
            </div>
            <div className="subpages__information-media">
              <img
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/network1-1.jpg"
                alt="Girl laughing"
              ></img>
            </div>
          </div>
          <div className="subpages__information-container">
            <div className="subpages__information-text">
              <h2>Manage users</h2>
              <p>
                Let your developers engage and collaborate in your application
                network by grouping them into teams and divisions. Assign user
                engagements, such as owner or developer, to the assets in your
                network. This makes it easy to find who to contact when
                developing.
              </p>
              <p>
                Your organizational structure becomes its own visual graph that
                instantly shows users' relationships within the application
                network.
              </p>
            </div>
            <div className="subpages__information-media">
              <img
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/gif/manage_users.gif"
                alt="How to manage users"
              ></img>
            </div>
          </div>
          <div className="subpages__information-container">
            <div className="subpages__information-text">
              <h2>Go from central to distributed integration</h2>
              <p>
                Maintain control as you empower your developer community to
                integrate self-sufficiently.
              </p>
              <p>
                An open, and thus insight-providing application network will
                enable your developers to make smart decisions and create
                quality integrations.
              </p>
            </div>
            <div className="subpages__information-media">
              <img
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/gif/ids_and_links_6.gif"
                alt="ID's and links gif"
              ></img>
            </div>
          </div>
          <div className="subpages__information-container">
            <div className="subpages__information-text">
              <h3>Keep track of changes and updates</h3>
              <p>
                Import data from your existing integration catalog and get a
                kickstart, or incorporate updates in Entiros Starlify to your
                continuous integration build pipelines via the Entiros Starlify
                API.
              </p>
            </div>
            <div className="subpages__information-media">
              <img
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/presentation2-1.jpg"
                alt="presentation"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default CrowdsourcedKnowledge;
