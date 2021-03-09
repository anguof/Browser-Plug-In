import React from "react";
import { hot } from "react-hot-loader";
import "./Pop.css";

class Pop extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = (company) => this._handleClick(company);
  }

  _handleClick(company) {
    var newURL;
    if (company === 'losangeles') {
      newURL = "https://losangeles.trapac.com/quick-check/?terminal=LAX&transaction=availability";
    } else if (company === 'oakland') {
      newURL = "https://oakland.trapac.com/quick-check/?terminal=OAK&transaction=availability";
    } else if (company === 'hmm') {
      newURL = "http://www.hmm21.com/cms/business/ebiz/trackTrace/trackTrace/index.jsp";
    } else if (company === 'maersk') {
      newURL = "https://www.maersk.com.cn";
    }
    chrome.tabs.create({ url: newURL });
  }
  render() {
    return (
      <div className="wrapper">
        <p>{'绿色屏保，保护眼睛。'}</p>
      </div>
    )
  }
};

export default hot(module)(Pop)
