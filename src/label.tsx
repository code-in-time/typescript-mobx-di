import React, {ReactEventHandler} from 'react';
import { ITestProps, Person } from './test';
import { observer } from 'mobx-react'

export interface ILabelProps {
  data: Person
  objType: Person
}

export interface ILabelState {
}

@observer
export default class Label extends React.Component<ILabelProps, ILabelState> {
  constructor(props: ILabelProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const s = this.props.data.age
    return (
      <div>
        <input
          type="text"
          value={this.props.data.name }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.data.name = e.target.value } placeholder={this.props.data.age.toString()} />
      </div>
    );
  }
}
