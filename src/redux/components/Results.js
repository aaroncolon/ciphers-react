import React from 'react'
import { connect } from 'react-redux'
import TableRow from './TableRow'
import cipherMaps from '../../cipherMaps'

class Results extends React.Component {
  constructor(props) {
    super(props)

    this.cipherMaps = cipherMaps
  }

  decode(cipherType, string) {
    let total = 0
    let s1 = string.toLowerCase()
    let s2 = s1.replace(/\s/g, '')
    let stringArray = [ ...s2 ]
    let detailRows = []

    stringArray.forEach(function(currVal, index) {
      let oldTotal = total
      let cipherVal = this.cipherMaps[cipherType][currVal]
      total += this.cipherMaps[cipherType][currVal]
      detailRows.push(
        <TableRow
          key={index + '-' + currVal}
          currVal={currVal.toUpperCase()}
          cipherVal={cipherVal}
          oldTotal={oldTotal}
          total={total} />
      )
    }, this)

    return {
      'total' : total,
      'rows' : detailRows
    }
  }

  render() {
    if (! this.props.string || ! this.props.string.length) {
      return null
    }

    const decodedData = this.decode(this.props.cipherType, this.props.string)

    return (
      <div id="results">
        <hr />
        <h2 className="title--section">Results</h2>
        <h3 className="h5">Word / Phrase:</h3>
        <h4 className="h3"><strong>{this.props.string}</strong></h4>

        <h3 className="h5">Total:</h3>
        <h4 className="h3"><strong>{decodedData.total}</strong></h4>

        <hr />

        <h2 className="h3 title--section">Details</h2>
        <div className="details">
          <table>
            <thead>
              <tr>
                <th>Letter</th>
                <th>Value</th>
                <th></th>
                <th>Running Total</th>
                <th></th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {decodedData.rows}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  // return the piece of state we need for this component
  return {
    cipherType: state.cipherType,
    string: state.string
  }
}

export default connect(mapStateToProps)(Results)
