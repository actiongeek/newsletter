import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


const propTypes = {
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
}

const defaultProps = {
  inputClassName: 'input-custom',
  readOnly: false,
}

export default class TextInput extends PureComponent {
  handleChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render() {
    const { inputClassName, inputComponent, ...restProps } = this.props
    return (
      <input
        {...restProps}
        className={(this.props.meta.error && this.props.meta.touched) ? 'form-control error' : 'form-control'}
        onChange={this.handleChange}
      />
    )
  }
}

TextInput.propTypes = propTypes
TextInput.defaultProps = defaultProps
