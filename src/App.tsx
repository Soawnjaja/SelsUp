import React from 'react';
import { ParamEditor } from './ParamEditor/ParamEditor'

function App() {
  return (
      <div>
        <ParamEditor params={[
            {
                id: 1,
                name: 'NAME',
                type: 'string'
            },
            {
                id: 1,
                name: 'Супе поле строка',
                type: 'string'
            },
            {
                id: 1,
                name: 'Номерок',
                type: 'number'
            },
            {
                id: 1,
                name: 'ФИО',
                type: 'string'
            },
            {
                id: 1,
                name: 'Много текста',
                type: 'text'
            }
        ]} model={{paramValues: []}} />
      </div>
  );
}

export default App;
