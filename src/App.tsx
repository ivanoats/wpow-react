
import * as React from 'react';
import { hot } from "react-hot-loader/root";

interface Props {
   station:
    string
}

class App extends React.Component<Props> {
  render() {
    const { station } = this.props;
    return (
      <>
        <h1 className="p12 text-6xl text-black bg-gray-400">
          Weather for {station}
        </h1>
      </>
    );
  }
}

export default hot(App);
