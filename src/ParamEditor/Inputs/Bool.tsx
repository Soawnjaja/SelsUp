import React from 'react'
import { Param } from '../ParamEditor'

export class Bool extends React.Component<Param> {
    render() {
        return (
            <>
                <label className='labelName'>
                     {this.props.name} <input type="checkbox" name={this.props.name}/>
                </label>
            </>
        );
    }
}