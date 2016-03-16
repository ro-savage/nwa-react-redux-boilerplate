import React from 'react'
import styles from './ListWithBars.scss'
import ListBar from '../ListBar/ListBar'

export default class ListWithBars extends React.Component {

  static propTypes = {
    data: React.PropTypes.array.isRequired,
    extension: React.PropTypes.bool,
  }

  render() {
    const { data, extension } = this.props

    return (
      <div className={styles.container}>
        {data.map((task) =>
          <ListBar text={task.title} current={task.current} key={task.id} extension={extension} />
        )}
      </div>
    )
  }
}
