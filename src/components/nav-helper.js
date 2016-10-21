import app from 'ampersand-app';
import React from 'react';
import localLinks from 'local-links';

export default React.createClass({
	displeyName: 'NavHelper',

	onClick (event) {
		const pathname = localLinks.getLocalPathname(event)

		if (pathname) {
			event.preventDefault()  // tells navigate internaly

			app.trigger('local', {some: 'data'})

			app.router.history.navigate(pathname)
		}
	},

	render () {
		return (
			<div {...this.props} onClick={this.onClick}>
				{this.props.children}
			</div>
		)
	}
})