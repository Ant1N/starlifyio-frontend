import React from 'react';
import SubpageHeader from '../../components/SubpageHeader';
import Footer from '../../components/Footer';

function IntergrationMetadata() {
  return (
    <div>
      <div className="subpages__container">
        <SubpageHeader
          url="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/agile-discoverability.png"
          alt="Agile Discoverability"
        ></SubpageHeader>
        <div className="site__container">
          <div className="subpages__center-text-container">
              <h1>Agile discoverability</h1>
              <h2>Re-use. Don't re-invent</h2>
              <p>
                Are you buying or making the same integrations over and over again? You are not alone. Actually, about 70 percent of all integrations made could have been avoided.
              </p>
              <p>
                Are you buying or making the same integrations over and over again? You are not alone. Actually, about 70 percent of all integrations made could have been avoided.
              </p>
              <p>By making all assets of an application network searchable and discoverable, it's easy to find re-usable integrations and services, or redundant API's.</p>
          </div>
          <div className="subpages__information-container">
            <div className="subpages__information-text">
              <h2>Navigate your application network</h2>
              <p>
                Easily find what you're looking for by searching, filtering, and highlighting nodes or data flows in your application network. Search for information objects and quickly find the service and the documentation needed.
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
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/gif/search.gif"
                alt="Searching"
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
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/star-1.jpg"
                alt="Working man"
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
