import React from 'react';
import Navbar from '../components/NavBar';
import Card from '../components/Card';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <Navbar />
      <div className="site__container">
        <header className="about__header">
          <h1>Our vision is an entire world as one, not one in pieces.</h1>
          <p className="about__header-p">
            We believe in an open and integrated world that is innovating above
            self, which is environmentally sustainable, socially just and great
            fun to live in.
          </p>
        </header>
        <section className="about__mission">
          <div className="card">
            <div className="textContainer">
              <h3>This is Entiros</h3>
              <p>
                Entiros Integrations is the leading specialized business
                integration company in Sweden. We create connectivity between
                and within companies via distributed agile integration, evolving
                a visible, open application network that enables innovation.
              </p>
              <h3>Our mission</h3>
              <p>
                We challenge and develop the integration industry by being the
                most innovative and open integration provider on the market - a
                trusted advisor in integration - a true and complete integration
                partner.
              </p>
            </div>
          </div>
          <div className="about__image">
            <img
              src="https://2277117.fs1.hubspotusercontent-na1.net/hub/2277117/hubfs/Starlify.io/stock%20image%201.png?t=1649693216160&width=860"
              alt="people laughing"
            ></img>
          </div>
        </section>
        <section className="about__cards">
          <Card title={'Collaboration'}>
            <p>
              We believe in creative collaborators, who contribute with their
              best skills to make better solutions. We honor teamwork as key to
              service above self.
            </p>
          </Card>
          <Card title={'Sharing'}>
            <p>
              We embrace sharing and transparency as means to reach higher
              goals. The most innnovative solutions spring from shared knowledge
              and collective efforts.
            </p>
          </Card>
          <Card title={'Empowerment'}>
            <p>
              We want everyone to feel empowered and be in charge of their own
              situation; have information, tools and ability to make the best
              decisions.
            </p>
          </Card>
        </section>
        <section className="about__sustainability">
          <div className="about__sustanability-card">
            <Card title={'Openness for sustainability'}>
              <p>
                Sustainable development, CSR (Corporate Social Responsibility),
                entails Entiros that we take active responsibility for how we
                influence society, from an economic, environmental and social
                perspective.
              </p>
              <p>
                Entiros shall avoid unnecessary consumption of human, physical
                and financial resources while optimizing the use of resources
                available to us. Entiros shall assist good purposes and purpose
                by actively contributing to social projects.
              </p>
            </Card>
          </div>
          <div className="about__enviromental">
            <Card title={'We follow applicable Environmental laws.'}>
              <ul>
                <li>
                  We purchase and use the products and services with the least
                  environmental impact.
                </li>
                <li>We strive to reduce our energy consumption.</li>
                <li>We minimize the amount of waste we produce.</li>
                <li>
                  We encourage electronic documentation, marketing and commerce.
                </li>
                <li>We make environmental demands for our suppliers.</li>
                <li>We work to continually improve our environmental work.</li>
              </ul>
            </Card>
          </div>
        </section>
      </div>
        <Footer />
    </div>
  );
}

export default About;
