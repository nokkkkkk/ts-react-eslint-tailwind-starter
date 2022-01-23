/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-use-before-define
import React from 'react';

type IProps = {
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
        <div className='flex justify-center'>
          <li className=''>
              <div>
                  <img className='object-scale-down h-20 w-40' src={person.url} alt="???" />
                  <h2>{person.name}</h2>
              </div>
              <p>{person.age} years old</p>
              <p>{person.note}</p>
          </li>
        </div>
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
