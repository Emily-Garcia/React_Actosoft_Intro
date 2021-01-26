import { Link } from '../common'
import { Paragraph } from '../common'
import { Imagen } from '../common'
import { Button } from '../common'
import { AppContainer } from '../common'

function AppUI(props) {
    return(
        <AppContainer>
          <Imagen />
          <Paragraph text='Hola Mundo desde React!' rojito />
          <Link />
          <br></br>
          <Button increment={props.handleClick} />
          <Paragraph text={`Contador: ${props.counter}`} />
        </AppContainer>
    )
}

export default AppUI