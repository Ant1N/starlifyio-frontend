import React from 'react';
import SubpageHeader from '../../components/SubpageHeader';
import Footer from '../../components/Footer';

function IntergrationMetadata() {
  return (
    <div>
      <div className="subpages__container">
        <SubpageHeader
          url="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/integration-metadata.png"
          alt="Integration metadata"
        ></SubpageHeader>
        <div className="site__container">
          <div className="subpages__information-text">
            <h1>Integration metadata catalog</h1>
          </div>
          <div className="subpages__information-text">
            <h2>Keep track of your data flows</h2>
            <p>
              We know what it's like struggling to gain control and some kind of
              overview of many integrations in large IT landscapes. A
              spreadsheet list quickly gets out of control and has a hard time
              describing relationships. And the flow charts get cluttered and
              unreadable when the amount of connections increases.
            </p>
            <p>
              Instead, put your integration and application metadata into
              Entiros Starlify. It will not only make a much more elaborate
              catalog, but will also organize them in graphs that take
              integration behavior, like end-to-end chains and dependencies,
              into consideration. The insights you get from finally being able
              to see all your data flows in one place will simplify decision
              making and take your business to the next level.
            </p>
          </div>
          <div className="subpages__information-container">
            <div className="subpages__information-text">
              <h2>How it works</h2>
              <p>
                To get organized with Entiros Starlify, you import or add your
                integration and application metadata consisting of systems,
                services, references and engagements. Then the tool creates a
                visual graph-based network map that gives you a unique holistic
                overview.
              </p>
              <h4>All this will finally be available to you:</h4>
              <ul>
                <li>System-to-system data flow maps</li>
                <li>Detailed and searchable schemas for all data flows</li>
                <li>
                  Middleware configuration management: description of how
                  components interact with the messaging infrastructure
                </li>
                <li>Logical to physical traceability</li>
                <li>End-to-end dependency management</li>
              </ul>
            </div>
            <div className="subpages__information-media">
              <img
                src="https://2277117.fs1.hubspotusercontent-na1.net/hub/2277117/hubfs/Starlify.io/image%205metadata%20image.png?t=1650370216231&width=860"
                alt="intergration metadata"
              ></img>
              <p>
                The data model that the graphs are based on comes from industry
                best practices. It describes integrations and illustrates
                end-to-end information dependency chains in a highly logical
                way.
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

export default IntergrationMetadata;
