import React from 'react'
import { connect } from 'react-redux'
import { setCipherType, setString } from '../actions/actions'

class DecoderForm extends React.Component {
  constructor(props) {
    super(props)

    // options
    this.ciphers = [
      ['alphabetic', 'Alphabetic (A = 1, B = 2, ...)'],
      ['alphabeticReverse', 'Alphabetic Reverse (A = 26, B = 25, ...)'],
      ['alphabetic3', 'Alphabetic by 3 (A = 3, B = 6, ...)'],
      ['alphabetic3Reverse', 'Alphabetic by 3 Reverse (A = 78, B = 75, ...)'],
      ['alphabetic6', 'Alphabetic by 6 (A = 6, B = 12, ...)'],
      ['alphabetic6Reverse', 'Alphabetic by 6 Reverse (A = 156, B = 150, ...)'],
      ['alphabetic9', 'Alphabetic by 9 (A = 9, B = 18, ...)'],
      ['alphabetic9Reverse', 'Alphabetic by 9 Reverse (A = 234, B = 225, ...)']
    ]

    // handlers
    this.handleChangeSelect = this.handleChangeSelect.bind(this)
    this.handleChangeString = this.handleChangeString.bind(this)
  }

  handleChangeSelect(e) {
    // dispatch redux action
    this.props.setCipherType({
      cipherType: e.currentTarget.value
    })
  }

  handleChangeString(e) {
    let value = e.currentTarget.value
    value = value.replace(/[^A-Za-z\s]/ig, '')

    // displatch redux action
    this.props.setString({
      string: value
    })
  }

  doOptions() {
    return this.ciphers.map((opt, i) => {
      return (
        <option key={i + '-' + opt[0]} value={opt[0]}>{opt[1]}</option>
      )
    })
  }

  render() {
    const options = this.doOptions()
    return (
      <div id="decoder-form">
        <form>
          <div className="form-control">
            <label htmlFor="cipher-type">Cipher Type</label>
            <select
              defaultValue={this.ciphers[0][0]}
              id="cipher-type"
              onChange={this.handleChangeSelect}>
              {options}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="string">Word or Phrase</label>
            <input id="string" type="text" pattern="/[a-zA-Z\s]/" onChange={this.handleChangeString} />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setCipherType: setCipherType,
  setString: setString
}

export default connect(null, mapDispatchToProps)(DecoderForm)
