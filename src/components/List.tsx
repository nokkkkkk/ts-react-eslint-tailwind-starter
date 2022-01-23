/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-use-before-define
import React from 'react';

interface IProps {
    people:{
      name: string
      age: number
      url: string
      note?: string
    }[]
  }

const List: React.FC<IProps> = ({ people }) => {
  // eslint-disable-next-line no-undef
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li>
            <div>
                <img className='object-scale-down h-48 w-96' src={person.url} alt="???" />
                <h2>{person.name}</h2>
            </div>
            <p>{person.age} years old</p>
            <p>{person.note}</p>
        </li>
      );
    });
  };

  return (
        <ul>
            {renderList()}
        </ul>
  );
};

export default List;
