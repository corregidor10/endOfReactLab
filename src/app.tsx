import * as React from 'react';
import { HolaReactComponent } from './components/hello';
import { NameEditComponent } from './components/nameEdit'

interface Props {

}

interface State {
  userName: string;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { userName: 'Aitor Karanka' };
  }
  private setUsernameState = (newName:string) => {
    this.setState({ userName: newName });
  }


  public render() {
    return (
      <>
        <NameEditComponent initialUserName={this.state.userName} onNameUpdated={this.setUsernameState} />
        <HolaReactComponent username={this.state.userName} />
      </>
    );
  }
}

