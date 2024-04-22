import React from 'react'
import { Param } from '../ParamEditor'

export class String extends React.Component<Param> {
    render() {
        return (
            <>
                <label>
                    {this.props.name} <input type="text" name={this.props.name}/>
                </label>
            </>
        );
    }
}