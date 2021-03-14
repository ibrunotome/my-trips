import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const PageTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>MY Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus numquam
        veniam, amet aliquam optio labore officia, nobis ipsum hic eligendi
        voluptas incidunt unde asperiores! Dolorum natus corrupti veritatis a
        quidem.
      </p>
    </S.Body>
  </S.Content>
)

export default PageTemplate
