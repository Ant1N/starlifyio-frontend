import React from 'react';
import { Accordion } from 'react-bootstrap';

function AccordionInfo() {
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>Gain visibility into your integration landscape</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Let your whole organization gather around a visual overview of
              your information landscape. This will ensure clarity and
              discoverability for developers as well as stakeholders. Being able
              to scope the target state of your integration projects in visual
              graphs will get you to your goal in no time.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4>Enable openness and work together</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Connect your developer community to your workspace, and reap the
              empowering benefits of distributed knowledge accompanied by
              crowdsourcing. Say hello to open collaboration and self-service,
              and goodbye to limiting dependencies and central bottlenecks.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4>Ensure success through warp speed</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The fantastic documentation features will make it easy to react
              quickly to incidents and your integration delivery will get up to
              10 times faster.
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionInfo;
