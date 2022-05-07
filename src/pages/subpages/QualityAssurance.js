import React from 'react';
import SubpageHeader from '../../components/SubpageHeader';
import Footer from '../../components/Footer';

function QualityAssurance() {
  return (
    <div>
      <div className="subpages__container">
        <SubpageHeader
          url="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/quality-assurance.png"
          alt="quality assurance"
        ></SubpageHeader>
        <div className="site__container">
          <div className="subpages__center-text-container">
            <h1>Quality assurance</h1>
            <h2>Integrations made right</h2>
            <p>
              Using best-practice integration methods and following standards
              can reduce the time spent on your integration projects by 50%. To
              spread the word on how to make integrations the right way, we made
              the world's first integration quality standard,{' '}
              <a
                href="https://certifiedintegrator.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Certified Integrator
              </a>
              .
            </p>
          </div>
          <div className="subpages__information-container">
            <div className="subpages__information-text">
              <h2>Follow the checklist</h2>
              <p>
                To make it easy for you to assure the highest possible quality
                in your work there are easy-to-follow checklists from the
                Certified Integrator standard incorporated into Entiros
                Starlify.
              </p>
              <p>
                The checklists allow you to keep all of your quality
                documentation in one place. You get a clear overview of how
                compliant your application network is to the quality standard,
                and it makes documentation a lot more fun!
              </p>
            </div>
            <div className="subpages__information-media">
              <img
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/ci_checklist.png"
                alt="CI checklist"
              ></img>
            </div>
          </div>
          <div className="subpages__information-container">
            <div className="subpages__information-text">
              <h2>Don't reinvent the wheel</h2>
              <p>
              Make sure you're meeting current integration standards with structure, order, and reuse.
              </p>
              <p>
              High integration quality results in shorter time-to-market, lower cost, and more security. It also plans for the future through usable documentation and faster onboarding when it comes to integrations and APIs
              </p>
            </div>
            <div className="subpages__information-media">
              <img
                src="https://f.hubspotusercontent10.net/hubfs/2277117/entiros-web/starlify/presentation4-1.jpg"
                alt="Presentation"
              ></img>
            </div>
          </div>
          <div className="subpages__information-container">
            <div className="subpages__information-text">
              <h2>Best-practice data model</h2>
              <p>
              The conceptual data model used in the graphs in Entiros Starlify is based on industry best practices and is highly logical. The components of the nodes in an application network are as follows:
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

export default QualityAssurance;
