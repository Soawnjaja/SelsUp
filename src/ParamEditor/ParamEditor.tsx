import React from 'react';
import { String } from './Inputs/String';
import { Bool } from './Inputs/Bool';
import { Number } from './Inputs/Number';
import { Text } from './Inputs/Text';

export interface Param {
    id: number;
    name: string;
    type: ParamT;
    value?: string; 
    onChange?: (value: string) => void; 
}
export interface ParamValue {
    paramId: number;
    value: string;
}
export interface Model {
    paramValues: ParamValue[];
}

export interface Props {
    params: Param[];
    model: Model;
}

export type ParamT = 'string' | 'bool' | 'number' | 'text';

const inputComponents = {
    'string': String,
    'bool': Bool,
    'number': Number,
    'text': Text,
};

export class ParamEditor extends React.Component<Props, { model: Model }> {
    constructor(props: Props) {
        super(props);
        this.state = {
            model: {
                paramValues: props.model.paramValues.map(paramValue => ({
                    paramId: paramValue.paramId,
                    value: paramValue.value || '', 
                })),
            },
        };
    }

    public getModel(): Model {
        return this.state.model;
    }

    handleInputChange = (paramId: number, value: string) => {
        this.setState(prevState => ({
            model: {
                paramValues: prevState.model.paramValues.map(paramValue =>
                    paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
                ),
            },
        }));
    }

    render() {
        return (
            <>
                {this.props.params.map(param => {
                    const Component = inputComponents[param.type];
                    const currentValue = this.state.model.paramValues.find(pv => pv.paramId === param.id)?.value || '';

                    return (
                        <div key={param.id}>
                            <Component
                                {...param}
                                value={currentValue}
                                onChange={(value: string) => this.handleInputChange(param.id, value)}
                            />
                        </div>
                    );
                })}
            </>
        );
    }
}
