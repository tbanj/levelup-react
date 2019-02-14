import React from 'react';

var people = [
  {
    name: 'Frank',
    age: 10,
  },
  { name: 'Tony', age: 20 },
  { name: 'Martin', age: 50 },
];

class NewComponent extends React.Component {
  render() {
    return (
      <div>
        {people.map(function(person, index) {
          return (
            <h1 key={index}>
              {' '}
              My name is {person.name}. I am {person.age} years old.{' '}
            </h1>
          );
        })}
      </div>
    );
  }
}

export default NewComponent;
