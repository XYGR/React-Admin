/**
 * Created by 叶子 on 2017/7/31.
 */
import { Component } from 'react';
import {connect} from 'react-redux';

class AuthWidget extends Component {
    render() {
        const { user } = this.props;
        return this.props.children(user || {});
    }
}
const mapStateToProps = state => ({
    user : state.user.user,
})

const mapDispatchToProps = dispatch =>({
})


export default connect(mapStateToProps,mapDispatchToProps)(AuthWidget);
