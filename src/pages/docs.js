import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import Community from '@theme/Community';

import styles from './styles.module.css';

const flags = ['/img/flag_green.svg', '/img/flag_blue.svg', '/img/flag_red.svg', '/img/flag_purple.svg']

const ProjectCard = (props) => {
    const {
        name,
        url,
        description,
        version = '0.1.0',
        updateTime = '2021-08-09',
        index
    } = props;

    return (
       <div className={styles.docsCard}>
           <div>
                <img src={useBaseUrl(flags[index])} />
                <a href={url}>{name}</a>
           </div>
           <p>
                {description}
           </p>
           <p>
                {'Latest version ' + version + ' released at ' + updateTime}
           </p>
       </div>
    );
};

function Home() {
    const context = useDocusaurusContext();
    const {title, customFields = {}} = context.siteConfig || {};

    if (!(context.siteConfig.customFields.docs || []).length) {
        return null;
    }
    const projects = context.siteConfig.customFields.docs.map((project, index) => {
        return <ProjectCard key={project.name} index={index % 4} {...project} />;
    });

    return (
        <Layout
            title={title}
            description={customFields.description}
        >
            <div className={styles.docs}>
                <h1>DOCUMENTS</h1>
                <p>Under Development</p>
                <div className={styles.docsCardBox}>
                    {projects}
                </div>
            </div>
        </Layout>
    );
}

export default Home;
