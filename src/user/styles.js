
import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    root: {
        height: '100vh'
    },
    paper: {
        paddingTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: '#fff',
        fontSize: '12px',
        padding: theme.spacing(1.5)
    },
    title: {
        flexGrow: 1,
        fontSize: '12px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    spae: {
        marginTop: '5px'
    }
}))