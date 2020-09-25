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
    return <div className="mb-12 mt-8">
      <a className={``} href="#" onClick={this.toggleVisibility}>{this.props.lead} 
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
      <div className={`${this.state.visible ? "visible" : "hidden"} mt-8 pl-6 pr-6 pb-6 pt-2 md:-ml-6 md:-mr-6 bg-gray-100 rounded-md`}>
        {this.props.children}
      </div>
    </div>;
  }
}

export default Accordion;