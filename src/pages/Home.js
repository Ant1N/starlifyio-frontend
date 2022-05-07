import React, { useState, useEffect } from 'react';
import FeaturesTabs from '../components/FeaturesTabs';
import Button from '../components/Button';
import Card from '../components/Card';
import PricingCard from '../components/PricingCard';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import AccordionInfo from '../components/AccordionInfo';
import MeetingPlanner from '../components/MeetingPlanner';
import axios from 'axios';

const baseURL = "https://my-app-u2dmi.ondigitalocean.app/api/homepage?populate[body][populate]=%2a"

function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setContent(response.data.data.attributes.body);
    });
  }, []);

  if (!content) return null;

  const headerTitle = content[0].headerTitle;
  const headerBread = content[0].headerBread;
  const companiesTitle = content[1].companiesTitle;


  return (
    <div>
      <Navbar></Navbar>
      <div className="site__container">
        <header className="homepage__header">
          <h1>{headerTitle}</h1>
          <p className="homepage__header-p">
            {headerBread}
          </p>
          <Button text="Read more" className="homepage__header-btn" />
          <img
            src="https://2277117.fs1.hubspotusercontent-na1.net/hub/2277117/hubfs/starlify-logo-white.svg?t=1650358213141&width=860"
            alt="Starlify logo"
          ></img>
        </header>
        <section className="homepage__customers">
          <h2>{companiesTitle} </h2>
          <div className="homepage__customers-container">
            <div className="homepage__customers-images">
              <img
                src="https://2277117.fs1.hubspotusercontent-na1.net/hub/2277117/hubfs/Starlify.io/keolis-logo.png?t=1649233440440&width=860"
                alt="Keolis"
              />
              <img
                src="https://2277117.fs1.hubspotusercontent-na1.net/hub/2277117/hubfs/Starlify.io/Volvo-Spread-Word-Mark-White.svg?t=1649233560196&width=860"
                alt="Volvo"
              />
            </div>
            <div className="homepage__customers-images">
              <img
                src="https://2277117.fs1.hubspotusercontent-na1.net/hub/2277117/hubfs/Starlify.io/gant%20logo%20vit.png?t=1649233440388&width=860"
                alt="Gant"
              />
              <img
                src="https://2277117.fs1.hubspotusercontent-na1.net/hub/2277117/hubfs/Starlify.io/envirotainer_logo.png?t=1649236366176&width=860"
                alt="Envirotainer"
              />
            </div>
          </div>
        </section>
        <section className="homepage__info">
          <h2>Why you should use Entiros Starlify</h2>
          <AccordionInfo></AccordionInfo>
          <div className="homepage__info-cards">
            <Card title="Gain visibility into your integration landscape">
              <p>
                Let your whole organization gather around a visual overview of
                your information landscape. This will ensure clarity and
                discoverability for developers as well as stakeholders.
              </p>
              <p>
                Being able to scope the target state of your integration
                projects in visual graphs will get you to your goal in no time.
              </p>
            </Card>
            <Card title="Enable openness and work togheter">
              <p>
                Connect your developer community to your workspace, and reap the
                empowering benefits of distributed knowledge accompanied by
                crowdsourcing.
              </p>
              <p>
                Say hello to open collaboration and self-service, and goodbye to
                limiting dependencies and central bottlenecks.
              </p>
            </Card>
            <Card title="Ensure success through warp speed">
              <p>
                The fantastic documentation features will make it easy to react
                quickly to incidents and your integration delivery will get up
                to 10 times faster.
              </p>
              <ul>
                <li>
                  30% time saved in development by using great integration tech
                </li>
                <li>
                  50% time saved in projects by following best practice
                  integration methods
                </li>
                <li>
                  70% time saved in your application network transformation by
                  utilizing your entire organization.
                </li>
              </ul>
            </Card>
          </div>
        </section>
        <section className="homepage__features">
          <div className="homepage__features-tabs">
            <FeaturesTabs>
            </FeaturesTabs>
          </div>
          <div className="homepage__features-container">
            <h2>Key features</h2>
            <div>
              <Card title="Integration metadata catalog">
                <p>
                  A graph-based integration catalog is the only way to keep
                  track of dependency chains and data flows in larger IT
                  landscapes. <a href="/intergration-metadata">Learn more now</a>
                </p>
              </Card>
              <Card title="Insight graphs">
                <p>
                  Insight has never been more accessible. Get the big picture
                  and also see how the information flows between applications.
                  <a href="/insight">Learn more now</a>
                </p>
              </Card>
            </div>
            <div>
              <Card title="Crowdsourced knowledge">
                <p>
                  Crowdsource your application network and empower your
                  developers to make smarter integrations.{' '}
                  <a href="/crowdsourced-knowledge">Learn more now</a>
                </p>
              </Card>
              <Card title="Agile discoverability">
                <p>
                  Sophisticated search and filtering functions make it super
                  easy to find and re-use integrations.{' '}
                  <a href="/agile-discoverability">Learn more now</a>
                </p>
              </Card>
            </div>
            <Card title="Quality assurance">
              <p>
                It has never been easier to follow an integration standard. With
                best practice methods and data models integrated into the
                software, the best integration quality is guaranteed.{' '}
                <a href="/quality-assurance">Learn more now</a>
              </p>
            </Card>
          </div>
        </section>
        <section className="homepage__review">
          <Card title="">
            <img src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/claes_asblom.png" alt="picture of customer"></img>
            <p>"With Entiros Starlify we can efficiently keep track of our integration deliveries and get a vital documentation of our integration landscape. This aids us not only in everyday development, but also by creating more space for innovation."</p>
            <p><i>/ Claes Åsblom, IT Business Relationship Manager & Integration Architect at Envirotainer</i></p>
          </Card>
        </section>
        <section className="homepage__pricing">
          <h2>Pricing</h2>
          <div className="homepage__pricing-container">
            <PricingCard
              title="Community"
              price="0"
              startsAt=""
              listTitle="Core features"
            >
              <li>1 user</li>
              <li>
                100 API requests per 10 seconds and 250 000 requests per day
              </li>
              <li>
                Application networking / Create an open application network
              </li>
              <li>Flows of e2e Service Chains (Maximum 5 flows)</li>
              <li>Key Insight Graphs for Application Network</li>
              <li>IDs and URL Linking of all Nodes</li>
              <li>Access to demo network</li>
              <li>Data import</li>
            </PricingCard>
            <PricingCard
              title="Community"
              price="25"
              startsAt="10"
              listTitle="Additional features"
            >
              <li>+1 Collaboration workspace</li>
              <li>Invite your team and collaborate</li>
              <li>Divide users into teams and divisions</li>
              <li>Workspace and network permissions</li>
              <li>Unlimited flows</li>
              <li>Combine networks into a view of networks</li>
              <li>Certified Integrator Checklist</li>
              <li>Administrate your organisation</li>
              <li>Custom Attributes</li>
              <li>Combine networks into a view of networks</li>
            </PricingCard>
            <PricingCard
              title="Enterprise"
              price="25"
              startsAt="100"
              listTitle="Additional features"
            >
              <li>Suitable for organizations with more than 100 users</li>
              <li>SSO login</li>
              <li>
                100 API requests per 10 seconds and 500 000 requests per day
              </li>
              <li>On premise installation (Optional)</li>
              <li>Custom Reporting</li>
              <li>Custom Dashboard</li>
              <li>Enterprise Sharing</li>
            </PricingCard>
          </div>
        </section>
        <section className="homepage__meeting">
          <div>
            <MeetingPlanner></MeetingPlanner>
          </div>
        </section>
      </div>
      <Footer />
    </div>

  );
}

export default Home;
