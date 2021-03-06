import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "./auth_type";
import {
  setSignupLoading,
  setLoginLoading,
  setLoginError,
  setSignupError,
} from "./auth_action";
import Api from "../../utils/service";
import { setLocalStorage } from "_utils/global_function";

function* signupUser({ payload }) {
  try {
    yield put(setSignupLoading(true));
    const { email, password, fullName, navigate } = payload;
    if (!email || !password || !fullName) {
      yield put(setSignupError("Please Try Again"));
      yield put(setSignupLoading(false));
    }
    const response = yield call(Api.post, "/auth/register", {
      email: email,
      password: password,
      name: fullName,
    });
    if (response.data.success === true) {
      const data = response.data.message;
      setLocalStorage("user", data, 1000 * 7 * 24 * 60 * 60);
      navigate("/general");
    }
    yield put(setSignupLoading(false));
  } catch (error) {
    console.log(error.response.data.message);
    yield put(setSignupLoading(false));
    yield put(setSignupError(error.response.data.message));
  }
}
function* loginUser({ payload }) {
  try {
    yield put(setLoginLoading(true));
    const { email, password, navigate } = payload;
    const response = yield call(Api.post, "/auth/login", {
      email: email,
      password: password,
    });
    if (response.data.success === true) {
      const data = response.data.message;
      setLocalStorage("user", data, 1000 * 7 * 24 * 60 * 60);
      navigate("/general");
    }
    yield put(setLoginLoading(false));
  } catch (error) {
    console.log(error.response.data.message);
    yield put(setLoginError(error.response.data.message));
    yield put(setLoginLoading(false));
  }
}
export default function* watcher() {
  yield takeEvery(actionTypes.SIGNUP_USER, signupUser);
  yield takeEvery(actionTypes.LOGIN_USER, loginUser);
}
