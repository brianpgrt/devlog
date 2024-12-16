/**
import { isString, noop } from "lodash";
import { isPossiblePhoneNumber, isValidPhoneNumber } from "libphonenumber-js";

export const validatePhoneNumber = () => ({
	validator(_, value) {
		if (!value || (isPossiblePhoneNumber(value) && isValidPhoneNumber(value))) {
			return Promise.resolve();
		}
		return Promise.reject(new Error("Please enter a valid phone"));
	}
});

export const validatePassword = (handlePasswordRules = noop) => ({
	validator(_, value) {
		const rules = {
			lowercase: false,
			uppercase: false,
			digit: false,
			specialCharacter: false,
			least8Characters: false
		};
		if (value && isString(value)) {
			if (value.match(/^(?=.*[a-z])[A-Za-z\d`~!@#$%^&*()\-_+={[}\]\\|:;"'<,>./?]{1,}$/)) {
				rules.lowercase = true;
			}
			if (value.match(/^(?=.*[A-Z])[A-Za-z\d`~!@#$%^&*()\-_+={[}\]\\|:;"'<,>./?]{1,}$/)) {
				rules.uppercase = true;
			}
			if (value.match(/^(?=.*\d)[A-Za-z\d`~!@#$%^&*()\-_+={[}\]\\|:;"'<,>./?]{1,}$/)) {
				rules.digit = true;
			}
			if (
				value.match(
					/^(?=.*[`~!@#$%^&*()\-_+={[}\]\\|:;"'<,>./?])[A-Za-z\d`~!@#$%^&*()\-_+={[}\]\\|:;"'<,>./?]{1,}$/
				)
			) {
				rules.specialCharacter = true;
			}
			if (value.match(/^[A-Za-z\d`~!@#$%^&*()\-_+={[}\]\\|:;"'<,>./?]{8,}$/)) {
				rules.least8Characters = true;
			}

			handlePasswordRules(rules);

			if (
				value.match(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()\-_+={[}\]\\|:;"'<,>./?])[A-Za-z\d`~!@#$%^&*()\-_+={[}\]\\|:;"'<,>./?]{8,}$/
				)
			) {
				return Promise.resolve();
			}
		} else {
			handlePasswordRules(rules);
			return Promise.resolve();
		}

		return Promise.reject(new Error(""));
	}
});

export const validateConfirmPassword = (form: any) => ({
	validator(_, value) {
		const pw = form.getFieldValue("password");
		if (!value || pw === value) {
			return Promise.resolve();
		}
		return Promise.reject(new Error("Please enter valid confirm password"));
	}
});
 */
