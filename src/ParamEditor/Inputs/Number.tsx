import React from 'react'
import { Param } from '../ParamEditor'

export class Number extends React.Component<Param> {
    render() {
        return (
            <div>
                <label>
                    {this.props.name} <input type="number" name={this.props.name}/>
                </label>
            </div>
        );
    }
}