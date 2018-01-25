import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import {connect} from 'react-redux'

const styles = {
    wrapper: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        position: 'fixed',
        left: 0,
        right: 0,
        zIndex: 99999
    },
    indicator: {

        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }
}

const LoadingIndicator = (props) => (
    props.isLoading ?
        <div style={styles.wrapper}>
            <div>
                <CircularProgress style={styles.indicator} size={60} thickness={7}/>
            </div>
        </div>
        :
        null
);

const mapStateToProps = state => ({
    isLoading: state.loading.isLoading
})

export default connect(
    mapStateToProps
)(LoadingIndicator)