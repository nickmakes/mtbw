import React, { Component } from 'react';
import { connect } from 'react-redux';

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const initialState: State = {};
type State = Readonly<{ [key: string]: string }>;

class LandingPage extends Component<Props, State> {
  readonly state: State = initialState;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-page">
        <h1>mtbw portal</h1>
        <p>the portal to a dynasty league for fantasy baseball</p>
      </div>
    );
  }
}

const mapStateToProps = (): StateProps => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
