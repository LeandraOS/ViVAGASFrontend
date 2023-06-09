import * as React from 'react'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuList from '@mui/material/MenuList'
import { FileOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { ContainerMenu, Name, ProfilePict } from './styles'

interface ProfileMenuProps {
    name: string;
    registros: string;
}

export function ProfileMenu(props: ProfileMenuProps) {
  const { name, registros } = props
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

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
        <ProfilePict src='https://avatars.githubusercontent.com/u/50140771?s=400&u=2485e9a45b92b99b196ba3f9c1e233a4261de7f9&v=4'></ProfilePict>
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
                  <ContainerMenu onClick={handleClose}><UserOutlined />Perfil</ContainerMenu>
                  <ContainerMenu onClick={handleClose}><FileOutlined />{registros}</ContainerMenu>
                  <ContainerMenu onClick={handleClose}><LogoutOutlined />Sair</ContainerMenu>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}