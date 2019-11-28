import React from 'react';
import { observer } from 'mobx-react'
import { observable, computed } from "mobx"
import { inherits } from 'util';
import Label from './label';

export interface ITestProps {
  sName?: string
}


export class Person {
  @observable name: string = "andrew"
  @observable age: number = 22
}



@observer
export default class Test extends React.PureComponent<ITestProps> {

  private p = new Person();

  public render() {

    // this.p.age this.p.name
    return (
      <div>
        {this.p.name}
        <Label data={this.p} objType={Person}/>
      </div>
    );
  }
}
