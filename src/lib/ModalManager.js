
const ModalManager = {
	_modal: null,
	_isShown: false,

	register(modal) {
		this._modal = modal;
	},

	unregister() {
		this._modal = null;
	},

	show(newState) {
		if (this._modal === null) {
			return;
		}

		if (this._isShown) {
			this._modal._hide();
		}

        this._modal._show(newState);
	},

	updateContent(newState) {
		this._modal._updateContent(newState);
	},

	hide(force = false) {
		if (this._modal === null) {
			return;
		}

		if (!this._isShown) {
			return;
		}

		this._modal._hide(force);
	}
};

export default ModalManager;
