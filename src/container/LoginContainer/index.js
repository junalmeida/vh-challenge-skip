// @flow
import * as React from "react";
import { Item, Input, Icon, Form } from "native-base";
import { Toast } from "react-native";
import { observer, inject } from "mobx-react/native";
import { Keyboard } from "react-native";

import Login from "../../stories/screens/Login";
import { LoginStore } from "../../store/ViewStore/LoginStore";

export interface Props {
    navigation: any,
    loginStore: LoginStore,
}
export interface State { }

@inject("loginStore")
@observer
export default class LoginContainer extends React.Component<Props, State> {

    emailInput: Input;
    pwdinput: Input;
    login() {
        if (this.props.loginStore.isValid) {
            //this.props.loginStore.clearStore();
            Keyboard.dismiss();
            this.props.navigation.navigate("Drawer");
        } else {
            Toast.show({
                text: "Enter Valid Email & password!",
                duration: 2000,
                position: "top",
                textStyle: { textAlign: "center" },
            });
        }
    }

    render() {
        const form = this.props.loginStore;
        const Fields = (
            <Form>
                <Item error={form.emailError ? true : false}>
                    <Icon active name="person" />
                    <Input
                        placeholder="Email"
                        keyboardType="email-address"
                        ref={c => (this.emailInput = c)}
                        value={form.email}
                        onChangeText={e => (form.email = e)}
                        />
                </Item>
                <Item error={form.passwordError ? true : false}>
                    <Icon active name="unlock" />
                    <Input
                        placeholder="Password"
                        ref={c => (this.pwdinput = c)}
                        value={form.password}
                        onChangeText={e => (form.password = e) }
                        secureTextEntry={true}
                    />
                </Item>
            </Form>
        );
        return <Login navigation={this.props.navigation} loginForm={Fields} onLogin={() => this.login()} />;
    }
}
