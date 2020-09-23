import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility(e) {
    e.preventDefault();
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return <div className="mb-8 mt-4">
      <a className="leading-4" href="#" onClick={this.toggleVisibility}>{this.props.lead} 
        <span className="caret inline-block w-5 ml-1 absolute">
          {this.state.visible ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          }
        </span>
      </a>
      <div className={`${this.state.visible ? "visible" : "hidden"} mt-6 pl-6 -ml-6 border-l-2`}>
        {this.props.children}
      </div>
    </div>;
  }
}

export default Accordion;