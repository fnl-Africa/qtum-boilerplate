import React from 'react'
import { inject, observer } from 'mobx-react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'
import { withStyles } from '@material-ui/core/styles'

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon
}

const styles = theme => ({
    success: {
        backgroundColor: green[600]
    },
    error: {
        backgroundColor: theme.palette.error.dark
    },
    info: {
        backgroundColor: theme.palette.primary.dark
    },
    warning: {
        backgroundColor: amber[700]
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit
    },
    message: {
        display: 'flex',
        alignItems: 'center'
    }
})

const MySnackbarContent = (props) => {
    const { classes, className, message, onClose, variant, ...other } = props
    const Icon = variantIcon[variant]

    return (
        <SnackbarContent
            className={`${classes[variant]} ${className}`}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={`${classes.icon} ${classes.iconVariant}`} />
                    {message}
                </span>
            }
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={onClose}
                >
                    <CloseIcon className={classes.icon} />
                </IconButton>
            ]}
            {...other}
        />
    )
}

const MySnackbarContentWrapper = withStyles(styles)(MySnackbarContent)

@inject('stores') @observer
class CustomizedSnackbars extends React.Component {
    handleClose = () => {
        this.props.stores.Alert.onClose()
    }

    render() {
        const { open, text, type } = this.props.stores.Alert
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    open={open}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                >
                    <MySnackbarContentWrapper
                        onClose={this.handleClose}
                        variant={type}
                        message={text}
                    />
                </Snackbar>
            </div>
        )
    }
}

export default CustomizedSnackbars
