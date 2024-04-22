import React from 'react'
import { Param } from '../ParamEditor'

export class Text extends React.Component<Param> {
    render() {
        return (
            <div>
                <label>
                    {this.props.name} <textarea name={this.props.name}/>
                </label>
            </div>
        );
    }
}