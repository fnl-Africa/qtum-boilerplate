import React from 'react'
import { inject, observer } from 'mobx-react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

@inject('stores') @observer
class Home extends React.Component {
    constructor(props) {
        super(props)

        this.Alert = props.stores.Alert
    }
    alertSth = () => {
        this.Alert.success('hello world')
    }
    render() {
        return (
            <div>
                <Typography variant="h1">
                    Home
                </Typography>
                <Button
                    color='primary'
                    variant="outlined"
                    onClick={this.alertSth}
                >alert</Button>
            </div>
        )
    }
}

export default Home
