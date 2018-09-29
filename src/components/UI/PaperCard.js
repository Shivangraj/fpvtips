import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const PaperCard = styled(Paper)`
  padding: 1rem;
  min-width: 200px;

  :hover {
    box-shadow: ${props =>
      props.hoverable == 'true'
        ? '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);'
        : ''};
  }
`

export default PaperCard
