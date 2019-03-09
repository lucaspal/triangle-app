/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Class from the react wrapper for tradeshift-ui. See {@link https://github.com/Tradeshift/react-tradeshift-ui/}
 */
class Note extends React.Component {
	componentDidMount() {
		this.update(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.update(nextProps);
	}

	componentWillUnmount() {
		if (this.note) {
			this.note.close();
		}
		this.note = null;
	}

	update(props) {
		window.ts.ui.ready(() => {
			this.note = window.ts.ui.Note({
				icon: props.icon,
				text: props.text,
				onclose: props.onClose
			});
			this.note.icon = props.icon;
			this.note.text = props.text;
			this.note.onclose = props.onClose;
		});
	}

	render() {
		return null;
	}
}

Note.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string.isRequired,
	onClose: PropTypes.func
};

Note.defaultProps = {
	icon: null,
	onClose: () => {}
};

export default Note;