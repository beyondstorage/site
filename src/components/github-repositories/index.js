import React from 'react';

import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';


const GithubRepositories = ({ projects = [] }) => {
  const context = useDocusaurusContext();
  const { title, customFields = {} } = context.siteConfig || {};

  return (
    <Layout
      title={title}
      description={customFields.description}
    >
      <h1 className={styles.title}>
        <Translate>DOCUMENTS</Translate>
      </h1>
      <p className={styles.subtitle}>
        <Translate>under development</Translate>
      </p>
      <div className={styles.repositories}>
        {
          projects.map(({ name, description, pushed_at, tag_name }) => (
            <div key={name} className={styles.project}>
              <h4>{name}</h4>
              <p>{description}</p>
              <p>{`Latest version ${tag_name || ''} released at ${pushed_at || ''}`}</p>
            </div>
          ))
        }
      </div>
    </Layout>
  );
};

export default GithubRepositories;
