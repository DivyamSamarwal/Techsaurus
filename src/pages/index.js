import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Open Source</>,
    imageUrl: 'img/open.svg',
    description: (
      <>
        Autobot Source code is provided for educational purposes. Scroll down for source code.
      </>
    ),
  },
  {
    title: <>Powerful Translator</>,
    imageUrl: 'img/translator.svg',
    description: (
      <>
        Translates <code>100+</code> languages with over 80% accuracy.
      </>
    ),
  },
  {
    title: <>Fun and Anime</>,
    imageUrl: 'img/anime.svg',
    description: (
      <>
        Get the latest news, anime info and character ratings at discord <code>12+</code> commands, akinator and some random image generators.
      </>
    ),
  },
  {
    title: <>Weather</>,
    imageUrl: 'img/weather.svg',
    description: (
      <>
        Current weather of <code>city_name</code> with temperature <code>°C</code>, Humidity <code>%</code> and Atmospheric Pressure <code>hPa</code>
      </>
    ),
  },
  {
    title: <>Utility</>,
    imageUrl: 'img/mod.svg',
    description: (
      <>
        There are many of Utility and moderation commands which will help in moderation like <code>info, slowmode, lock/unlock, reminder etc.</code>
      </>
    ),
  },      
  {
    title: <>High Quality Music</>,
    imageUrl: 'img/music.svg',
    description: (
      <>
        This service has been discontinued due to discord's new policy.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Autobot, Inc. By Divyam Samarwal <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc2')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
