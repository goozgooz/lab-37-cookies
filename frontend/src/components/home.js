import React from 'react';
import {connect} from 'react-redux';
import AuthForm from './auth-form'


class Home extends React.Component {

    render() {

        return (
            <div>
              <AuthForm onComplete={this.props.signup} np/>
            </div>
        )

    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);