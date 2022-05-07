import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

function FeaturesTabs() {
  const [key, setKey] = useState('Integration');

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Integration" title="Integration">
          <div className="tabContent__container">
            <div className="tabContent__text-container">
              <h2>Integration metadata catalog</h2>
              <p>
                A graph-based integration catalog is the only way to keep track
                of dependency chains and data flows in larger IT landscapes. <br />
                <a href="/intergration-metadata">Learn more now</a>
              </p>
            </div>
            <img
              src="https://2277117.fs1.hubspotusercontent-na1.net/hub/2277117/hubfs/Starlify.io/image%205metadata%20image.png?t=1650370216231&width=860"
              alt="Integration"
            ></img>
          </div>
        </Tab>
        <Tab eventKey="Insight" title="Insight">
          <div className="tabContent__container">
            <div className="tabContent__text-container">
              <h2>Insight graphs</h2>
              <p>
                Insight has never been more accessible. Get the big picture and
                also see how the information flows between applications.<br />
                <a href="/insight">Learn more now</a>
              </p>
            </div>
            <img
              src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/gif/force_directed_view_640.gif"
              alt="Graph GIF"
            ></img>
          </div>
        </Tab>
        <Tab eventKey="Knowledge" title="Knowledge">
          <div className="tabContent__container">
            <div className="tabContent__text-container">
              <h2>Knowledge</h2>
              <p>
                Crowdsource your application network and empower your developers to make smarter integrations.
                <a href="/crowdsourced-knowledge">Learn more now</a>
              </p>
            </div>
            <img
              src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/gif/manage_users.gif"
              alt="Add contact in Starlify"
            ></img>
          </div>
        </Tab>
        <Tab eventKey="Discoverability" title="Discoverability">
          <div className="tabContent__container">
            <div className="tabContent__text-container">
              <h2>Discoverability</h2>
              <p>
                Sophisticated search and filtering functions make it super 
                easy to find and re-use integrations.
                <a href="/agile-discoverability">Learn more now</a>
              </p>
            </div>
            <img
              src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/gif/search.gif"
              alt="Add contact in Starlify"
            ></img>
          </div>
        </Tab>
        <Tab eventKey="Quality" title="Quality">
          <div className="tabContent__container">
            <div className="tabContent__text-container">
              <h2>Quality</h2>
              <p>
                It has never been easier to follow an integration standard. With best practice methods and data models integrated into the software, the best integration quality is guaranteed.
                <a href="/quality-assurance">Learn more now</a>
              </p>
            </div>
            <img
              src="https://2277117.fs1.hubspotusercontent-na1.net/hub/2277117/hubfs/Starlify.io/ci%20badge%202.png?t=1650377779837&width=860"
              alt="Certified intergrator logo"
            ></img>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default FeaturesTabs;
