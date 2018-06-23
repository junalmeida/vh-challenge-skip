import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";


export default class LoginStore {
  @observable @persist email: string = "";
  @observable password: string = "";

  @computed get emailError(): string {
    const emailPatter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const required = this.email ? undefined : "Required";
    return required
      ? required
      : emailPatter.test(this.email) ? undefined : "Invalid email address";
  }

  @computed get passwordError(): string {
    const alphaNumeric = /[^a-zA-Z0-9 ]/i.test(this.password)
    ? "Only alphanumeric characters"
    : undefined;
  const maxLength =
    this.password.length > 15 ? "Must be 15 characters or less" : undefined;
  const minLength =
    this.password.length < 4 ? "Must be 4 characters or more" : undefined;
  const required = this.password ? undefined : "Required";
  return required
    ? required
    : alphaNumeric ? alphaNumeric : maxLength ? maxLength : minLength;
  }

  @computed get isValid(): boolean {
    return (this.emailError === undefined && this.passwordError === undefined);
  }

  @action
  clearStore() {
    this.email = "";
    this.clear();
  }

  @action
  clear(){
    this.isValid = false;
    this.emailError = "";
    this.password = "";
    this.passwordError = "";
  }
}

