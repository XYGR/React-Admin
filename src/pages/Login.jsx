/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {connect} from 'react-redux';
import { setUser,userLogin } from '../store/module/user';

const FormItem = Form.Item;

class Login extends React.Component {
    componentDidMount() {
        const { setUserInfo } = this.props;
        setUserInfo(JSON.parse(sessionStorage.getItem('user')));
    }
    componentDidUpdate(prevProps) { // React 16.3+弃用componentWillReceiveProps
        const { user, history } = this.props;
        console.log(user)
        if (user && user.uid) { // 判断是否登陆
            sessionStorage.setItem('user', JSON.stringify(user));
            history.push('/');
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { userLoginAction } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                userLoginAction(values.userName,values.password)
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-form" >
                    <div className="login-logo">
                        <span>React Admin</span>
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员账号" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <span className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</span>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    user : state.user.user,
})

const mapDispatchToProps = dispatch =>({
    setUserInfo(user){
        console.log('setUserInfo',user)
        dispatch(setUser(user))
    },
    userLoginAction(userName,password){
        dispatch(userLogin(userName,password))
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(Login));