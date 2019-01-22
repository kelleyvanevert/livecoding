import React, { Component } from 'react';
import './App.css';

class Teacher extends Component {

  onClick = () => {
    this.props.onSelect();
  }

  render () {
    return (
      <li onClick={this.onClick}
          className={this.props.selected ? "selected" : ""}>
        {this.props.teacherName}<br />
      </li>
    );
  }

}

/*className={this.state.selectedTeachers.indexOf(teacher) >= 0 ? "selected" : ""}
          onClick={() => this.clickTeacher(teacher)} */


export default Teacher;
