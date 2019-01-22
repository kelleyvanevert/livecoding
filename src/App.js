import React, { Component } from 'react';
import './App.css';

import Teacher from './Teacher.js';

class App extends Component {

  state = {
    teachers: [
      { name: "Kelley" },
      { name: "Arien" },
      { name: "Wouter" },
      { name: "Mimi" },
      { name: "Rein" },
      { name: "Milan" },
      { name: "Ally" },
    ],
    selectedTeachers: [
    ],
  }

  constructor (props) {
    super(props);

    this.state.selectedTeachers.push(this.state.teachers[2]);
    console.log(this.state)
  }


  selectTeacher = (teacher) => {

    let index = this.state.selectedTeachers.indexOf(teacher);

    if (index === -1) {
      console.log("selecting teacher", teacher)

      this.setState({
        selectedTeachers: [
          ...this.state.selectedTeachers,
          teacher,
        ],
      });
    } else {
      console.log("DESELECTING teacher", teacher)

      // teacher is selected
      let newSelectedTeachers = [...this.state.selectedTeachers];
      newSelectedTeachers.splice(index, 1);
      this.setState({
        selectedTeachers: newSelectedTeachers,
      });
    }
  }


  render () {

    return (
      <div>
        <ul className="teacherList">
          {this.state.teachers.map(teacher =>
          <Teacher teacherName={teacher.name}
                   onSelect={() => this.selectTeacher(teacher)}
                   selected={this.state.selectedTeachers.indexOf(teacher) >= 0}
          ></Teacher>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
