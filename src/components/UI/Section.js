import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'

const StyledSection = styled.section`
  padding: 2rem 0;
  color: ${props => (props.color ? props.color + '!important' : '')};
  background-color: ${props =>
    props.bgcolor ? props.bgcolor + '!important' : ''};

  h3 {
    margin-top: 0;
  }

  p {
    max-width: 70ch;
    margin: 0 auto;
  }

  .cta-container {
    margin-top: 2rem;
  }
`

export default class Section extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { color, bgcolor, title, content, buttons } = this.props.data

    return (
      <StyledSection color={color} bgcolor={bgcolor}>
        <h3>{title}</h3>
        <p>{content}</p>
        {buttons && (
          <div className="cta-container">
            {buttons.map((button, index) => {
              // Set default values in case items are null (default parameters in desctructuring did not work for me so I did it this way)
              let link = button.link == null ? '/' : button.link
              let label = button.label == null ? 'Read more' : button.label
              let variant =
                button.variant == null ? 'contained' : button.variant
              let color = button.color == null ? 'default' : button.color
              let minWidth = button.minWidth == null ? '240px' : button.minWidth

              return (
                <Link key={index} to={link}>
                  <Button
                    variant={variant}
                    color={color}
                    style={{
                      marginLeft: '0.5rem',
                      marginTop: '0.5rem',
                      minWidth,
                    }}
                  >
                    {label}
                  </Button>
                </Link>
              )
            })}
          </div>
        )}
      </StyledSection>
    )
  }
}
