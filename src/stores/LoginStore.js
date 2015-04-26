/**
 * Created by htm on 4/26/15.
 */
import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants';
import BaseStore from './BaseStore';
import jwt_decode from 'jwt_decode';


class LoginStore extends BaseStore {
	constructor(){
		this.dispatchToken = AppDispatcher.register(this._registerToActions.bind(this));
		this._user = null;
		this._jwt = null;
	}
	_registerToActions(action){
		switch(action.actionType) {
			case USER_LOGGED_IN:
				this._jwt = action.jwt;
				this._user = jwt_decode(this._jwt);
				this.emitChange();
				break;
			default:
				break;
		};
	}

	get user() {
		return this._user;
	}

	get jwt() {
		return this._jwt;
	}

	isLoggedIn(){
		return !!this._user;
	}
}

export default new LoginStore();