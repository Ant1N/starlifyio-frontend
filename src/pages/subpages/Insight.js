import React from 'react';
import SubpageHeader from '../../components/SubpageHeader';
import Footer from '../../components/Footer';

function Insight() {
  return (
    <div>
      <div className="subpages__container">
        <SubpageHeader
          url="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/enlightening-visualizations.png"
          alt="Enlightening visualizations"
        ></SubpageHeader>
        <div className="site__container">
          <div className="subpages__center-text-container">
            <div className="subpages__information-text">
              <h1>Insight graphs</h1>
              <h2>Seeing is believing</h2>
              <p>
                The only way to accurately describe data flows and end-to-end
                integrations is through graph-based modeling. And lucky for you,
                no one does integration visualization better than us.
              </p>
              <p>
                Being able to finally see how all your systems, applications and
                API:s are connected and how the information actually flows, will
                give you incredible insight. The graphs in Entiros Starlify are
                smart and adaptable to let you see what you need and hide what you
                don't
              </p>
              <h2 className="subpages__isight-views-title">Different views for different needs</h2>
            </div>
          </div>
          <div className="subpages__insight-views">
            <div className="subpages__information-media">
              <img
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/gif/force_directed_view_640.gif"
                alt="Force directed view"
              ></img>
              <p>
                The main force-directed graph in Entiros Starlify gives you the
                whole galaxy overview of your application network. It's highly
                intuitive and makes your application network come alive as it
                dances along with your alterations.
              </p>
            </div>
            <div className="subpages__information-media">
              <img
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/gif/circle_view.gif"
                alt="Circle view"
              ></img>
              <p>
                Viewing your network in the circle graph shows the relationships
                in a different way and clarifies which systems are most
                critical. Choose to view all nodes in one ring or split them up
                into two layers, for example to show internal and external
                applications.
              </p>
            </div>
            <div className="subpages__information-media">
              <img
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/gif/table_view.gif"
                alt="Table view"
              ></img>
              <p>
                The table view is a straightforward way to gain insight and
                simplifies actions like bulk editing.
              </p>
            </div>
          </div>
          <div className="subpages__information-container">
            <div className="subpages__information-text">
              <h2>Customize your network</h2>
              <p>
                With customizable attributes, you can take your application
                network to the next level. Add custom colors around nodes to
                show certain attributes or split your circle graph into multiple
                rings for deeper insight.
              </p>
            </div>
            <div className="subpages__information-media">
              <img
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/gif/custom_attributes.gif"
                alt="Customizing network"
              ></img>
            </div>
          </div>
          <div className="subpages__information-container">
            <div className="subpages__information-text">
              <h2>ID’s and links</h2>
              <p>
                To track all parts of your application network, IDs are
                auto-generated for each system, sub-system, service, and
                reference. Use these IDs in various contexts for documentation,
                logging, monitoring, financial follow-up, etcetera. Direct
                access to any node in your network is also available through
                unique URL links. You will never be confused again.
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
              <h2>Keep track of changes and updates</h2>
              <p>
                Import data from your existing integration catalog and get a
                kickstart, or incorporate updates in Entiros Starlify to your
                continuous integration build pipelines via the Entiros Starlify
                API.
              </p>
            </div>
            <div className="subpages__information-media">
              <img
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/presentation3-1.jpg"
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

export default Insight;
