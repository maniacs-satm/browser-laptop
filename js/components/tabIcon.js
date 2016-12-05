/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const React = require('react')
const ImmutableComponent = require('./immutableComponent')
const {StyleSheet, css} = require('aphrodite')

class TabIcon extends ImmutableComponent {
  isVolumeControl () {
    return this.props.styles.includes('volume')
  }
  render () {
    const className = css(
      styles.icon,
      this.isVolumeControl() && styles.volumeControl
    )
    return <div className={className}>
      <span className={this.props.styles} />
    </div>
  }
}

const styles = StyleSheet.create({
  'icon': {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    fontSize: '14px',
    margin: 'auto 0 auto 9px',
    position: 'relative',
    verticalAlign: 'middle'
  },
  'volumeControl': {
    color: '#37A9FD'
  }
})

module.exports = TabIcon
