import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
  AppBar,
  Paper,
  Card,
  TextField,
  CardMedia,
  CssBaseline,
  Icon,
  Grid,
} from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import background from './static/background.jpg'
import './App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  content: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: 10,
    width: '50%',
    position: 'fixed' /* or absolute */,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  button: {marginLeft: 5},
  textField: {color: theme.palette.primary},
}))

function App() {
  const classes = useStyles()
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <CssBaseline></CssBaseline>
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
              transformOrigin={{vertical: 'top', horizontal: 'center'}}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Categories</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
            <Typography variant='h6' className={classes.title}>
              Plant Book
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <Paper elevation={3} square className={classes.paper}>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
              <Grid item xs={12} md={10}>
                <TextField
                  color='primary'
                  className={classes.textField}
                  fullWidth
                  id='search'
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  color='primary'
                  variant='outlined'
                  fullWidth
                  size='medium'
                  className={classes.button}
                >
                  Search Plant
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </>
  )
}

export default App
