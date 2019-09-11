import React, { Component } from 'react';
import Routes from './routes';
import DocumentTitle from 'react-document-title';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { Layout } from 'antd';
import { ThemePicker } from './components/widget';
import { connect } from 'react-redux';
import {setUser} from './store/module/user';
import {setIsMobile} from './store/module/system';
const { Content, Footer } = Layout;

class App extends Component {
    state = {
        collapsed: false,
        title: '',
    };
    componentWillMount() {
        const { setUserInfo } = this.props;
        const user = JSON.parse(sessionStorage.getItem('user'));
        user && setUserInfo(user);
        this.getClientWidth();
        window.onresize = () => {
            this.getClientWidth();
        };
    }
    componentDidMount() {

    }
    getClientWidth = () => {
        // 获取当前浏览器宽度并设置responsive管理响应式
        const { setMobile } = this.props;
        const clientWidth = window.innerWidth;
        setMobile(clientWidth <= 992);
        // receiveData({isMobile: clientWidth <= 992}, 'responsive');
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { title } = this.state;
        const { isMobile,user } = this.props;
        return (
            <DocumentTitle title={title}>
                <Layout>
                    {!isMobile && <SiderCustom collapsed={this.state.collapsed} />}
                    <ThemePicker />
                    <Layout style={{ flexDirection: 'column' }}>
                        <HeaderCustom
                            toggle={this.toggle}
                            collapsed={this.state.collapsed}
                            user={user||{}}
                        />
                        <Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
                            <Routes auth={user||{}} />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            ST-Admin ©{new Date().getFullYear()} Created by 1728335970@qq.com
                        </Footer>
                    </Layout>
                </Layout>
            </DocumentTitle>
        );
    }
}

const mapStateToProps = state => ({
    isMobile:state.system.isMobile,
    user : state.user.user,
})

const mapDispatchToProps = dispatch =>({
    setUserInfo(user){
        let action = setUser(user)
        dispatch(action)
    },
    setMobile(flag){
        dispatch(setIsMobile(flag))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
