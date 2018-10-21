import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Fade } from 'react-reveal'

import Layout from '../components/Layout/layout'
import PaperCard from '../components/UI/PaperCard'
import Grid from '../components/UI/Grid'
import Section from '../components/UI/Section'
import FeatureList from '../components/UI/FeatureList'

import {
  bolts,
  box,
  earthNA,
  openBook,
  paperAndPencil,
  hammer,
  gettingStarted,
} from '../utils/svg'

const featureListContent = [
  {
    label: 'Save and browse FPV flying spots on the map',
    completed: true,
  },
  {
    label: 'Preview spots with videos and photos',

    completed: true,
  },
  {
    label: 'Share location and meet other FPV pilots',

    completed: false,
  },
  {
    label: 'Live wind and weather conditions',

    completed: true,
  },
  {
    label: 'Beginner friendly FPV glossary / dictionary',
    completed: false,
  },
  {
    label: 'Recommended tools, upvoted by the community',
    completed: false,
  },
  {
    label: 'Submit a dictionary entry',
    completed: true,
  },
  {
    label: 'Submit an article to the blog',
    completed: false,
  },
  {
    label: 'Quad builder - 3D model playground',
    completed: false,
  },
]

const pageList = [
  {
    image: earthNA,
    link: '/fpv-map/',
    title: 'FPV map',
  },
  {
    image: paperAndPencil,
    link: '/blog/',
    title: 'Blog',
  },
  {
    image: openBook,
    link: '/dictionary/',
    title: 'Dictionary',
  },
  {
    image: box,
    link: '/shopping-list/',
    title: 'Shopping list',
  },
  {
    image: hammer,
    link: '/tools/',
    title: 'Tools',
  },
  {
    image: gettingStarted,
    link: '/getting-started/',
    title: 'Getting started',
  },
  {
    image: bolts,
    link: '/quad-builder/',
    title: 'Quad builder',
  },
]

const helmetStrings = {
  title: 'Fpvtips',
  keywords:
    'transmitter, receiver, fpv spot, fpv footage, drone pictures, quad build, build a drone, custom drone build, micro, mini, BNF, bind and fly, plug and play, set, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

const AnnouncementCard = styled.div`
  margin: 3rem auto;
  max-width: 65ch;
  font-size: 18px;

  span {
    text-transform: uppercase;
    /* color: #f4900e; */
    color: #efb93f;

    sup {
      text-transform: none;
    }
  }
`

const StyledFeatureList = styled(FeatureList)`
  li:before {
    content: '🔳';
  }

  li.completed:before {
    content: '✅';
  }
`

class IndexPage extends React.Component {
  render() {
    const homePageSections = this.props.data.allHomePageSectionsJson.edges

    return (
      <Layout location={this.props.location}>
        <Helmet
          title={helmetStrings.title}
          meta={[
            {
              name: 'keywords',
              content: helmetStrings.keywords,
            },
          ]}
        />
        <div>
          <h1>Let's bring the FPV community closer together and flying!</h1>
          <Grid>
            {pageList.map((page, index) => (
              <Fade key={index} bottom delay={index * 25}>
                <Link to={page.link}>
                  <PaperCard hoverable="true" scale="true">
                    <img src={page.image} style={{ width: '150px' }} />
                    <br />
                    {page.title}
                  </PaperCard>
                </Link>
              </Fade>
            ))}
          </Grid>
          <Fade bottom duration={1500}>
            <AnnouncementCard>
              <PaperCard color="#fff" bgcolor="#576A70">
                This project is still in <span>public beta</span> and some
                features might be still missing. The official launch date is{' '}
                <span>
                  Nov 3<sup>rd</sup> 2018
                </span>
                .
              </PaperCard>
            </AnnouncementCard>
          </Fade>
          <Fade bottom duration={2500}>
            <div style={{ paddingBottom: '3.5rem' }}>
              <h3>Current progress:</h3>
              <StyledFeatureList>
                {featureListContent.map(({ label, completed }, index) => (
                  <li key={index} className={completed ? 'completed' : ''}>
                    {label}
                  </li>
                ))}
              </StyledFeatureList>
            </div>
          </Fade>
          {/* Home Page Sections */}
          {homePageSections.map(section => (
            <Fade key={section.node.id} bottom delay={250}>
              <Section data={section.node} />
            </Fade>
          ))}

          <p style={{ margin: '3rem auto', maxWidth: '65ch' }}>
            If you want to get involved,{' '}
            <a href="mailto:georgiyanev.gy@gmail.com">get in touch</a> or check
            out the{' '}
            <a href="https://github.com/jumpalottahigh/fpvtips">
              project repository
            </a>
            . Or,{' '}
            <Link to="/fpv-map/">
              submit info about an FPV spot you like flying so we can put it on
              the map.
            </Link>
            <br />
            Stay tuned and enjoy!
          </p>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const homePageSectionsQuery = graphql`
  query homePageSectionsQuery {
    allHomePageSectionsJson {
      edges {
        node {
          id
          title
          content
          color
          bgcolor
          bgimage
          video
          buttons {
            link
            external
            label
            variant
            color
            minWidth
          }
        }
      }
    }
  }
`
