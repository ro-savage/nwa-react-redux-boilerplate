import React from 'react'
import ListWithBars from '../../components/ListWithBars/ListWithBars'
import { connect } from 'react-redux'
import { Button } from 'react-toolbox/lib/button'
import { getJsonTasks } from '../../redux/modules/tasks/tasks'
import autoBind from 'react-autobind'
import rValues from 'ramda/src/values'

class TaskList extends React.Component {

  static propTypes = {
    tasks: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    autoBind(this)
  }

  async componentWillMount() {
    this.props.dispatch(getJsonTasks())
  }

  getTasks() {
    this.props.dispatch(getJsonTasks())
  }

  makeArrFromObj(object) {
    return rValues(object)
  }

  render() {
    const tasks = this.props.tasks
    return (
      <div>
        <br /><br />
        <Button raised primary onClick={this.getTasks}>Get Tasks</Button>
        <br /><br />
        <ListWithBars data={this.makeArrFromObj(tasks)} extension />
      </div>
    )
  }
}

const mapStateToProps = ({ tasks }) => ({ tasks: tasks.tasks })

export default connect(mapStateToProps)(TaskList)
