import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    container: {
        width: '100vw',
        height: '100vh',
    },
    item: {
        padding: '5%',
        textAlign: 'center'
    },
    input: {
        width: '100%',
        marginBottom: '10px'
    },
    button: {
        margin: '10px'
    }
}

const LogIn = (props) => (
    <div style={styles.container}>
        <Paper style={styles.item}>
            <h1 type="headline">
                Zaloguj się!
            </h1>
            <TextField
                placeholder={'E-mail'}
                type="email"
                name="email"
                style={styles.input}
                onChange={props.onTextChange}
            />
            <TextField
                placeholder={'Password'}
                type="password"
                name="password"
                style={styles.input}
                onChange={props.onTextChange}
            />
            <RaisedButton
                color="primary"
                style={styles.button}
                onClick={props.onLogInClick}
            >
                Zaloguj
            </RaisedButton>
            <RaisedButton
                color="accent"
                style={styles.button}
                onClick={props.onLogInByGoogleClick}
            >
                Zaloguj Google+
            </RaisedButton>
        </Paper>
    </div>
)

export default LogIn