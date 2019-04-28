import React from 'react';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          destinations: [],
        }
        // this.handleProjectChange = this.handleProjectChange.bind(this);
        // this.handleBackButton = this.handleBackButton.bind(this);
      }

      render() {
        return (
            <h1>Hello world!</h1>
        )
      }
}

export default Home;