import React from 'react';
import styles from './style';

import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from './components';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden font-poppins">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <header className={`${styles.boxWidth}`}>
          <Navbar />
        </header>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <main className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
