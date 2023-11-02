import * as React from 'react'
import { Link } from 'react-router-dom' // Importe o Link
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuList from '@mui/material/MenuList'
import { FileOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { ContainerMenu, Name, ProfilePict } from './styles'
import { useContext } from 'react'
import { AuthGoogleContext } from '../../contexts/authGoogle'

export function ProfileMenu(props) {
  const { name, picture, registros } = props
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (
      anchorRef.current &&
            anchorRef.current.contains(event.target)
    ) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }
  const { signed, signInGoogle, signOut } = useContext(AuthGoogleContext);

  const handleButtonClick = () => {
    if (signed) {
      signOut();
    } else {
      signInGoogle();
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus()
    }

    prevOpen.current = open
  }, [open])

  if (!name || !registros) {
    return null // Renderiza nada se as propriedades não forem fornecidas
  }

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <ProfilePict src={picture}></ProfilePict>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <Name>{name}</Name>
                  <Link to="/inscricoes" style={{textDecoration: 'none', color: '#000000DE'}}> {/* Use o Link para a rota "/inscricoes" */}
                    <ContainerMenu onClick={handleClose}><FileOutlined />Minhas Inscrições</ContainerMenu>
                  </Link>
                  <ContainerMenu onClick={handleButtonClick}><LogoutOutlined />Sair</ContainerMenu>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}
