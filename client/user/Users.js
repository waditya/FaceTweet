class Users extends Component {

  state = { users: [] } //initialize the state with an empty array of users

  componentDidMount = () => {
    list().then((data)=> {
      if (data.error)
        console.log(data.error);
      else {
        this.setState({users: data})
      }
    })
  }


// The function contains the actual view content of the
// component, and is render Users composed with Material-UI components
// such as Paper, List, and ListItems.

render() {
  const {classes} = this.props
  return(
    <Paper className = {classes.root} elevation= {4}>
      <Typography type="title" className={classes.title}>
      All Users
      </Typography>
      <List dense>
        {this.state.users.map(function(item, i)){
          return <Link to={"/user/" + item._id} key={i}>
          <ListItem button="button">
            <ListItemAvatar>
              <Avatar>
                <Person/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary = {item.name}/>
            <ListItemSecondaryAction>
              <IconButton>
                <ArrowForward/>
              </IconButton>
            </ListItemSecondaryAction>
            </ListItem>
            </Link>
        })}
      </List>
      </Paper>

  )
}
