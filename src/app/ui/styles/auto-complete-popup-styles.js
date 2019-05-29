var csjs = require('csjs-inject')

var css = csjs`
  .popup             {
    position         : absolute;
    text-align       : left;
    display          : none;
    width            : 100%;
    font-family      : monospace;
    font-size        : 10px;
    overflow         : auto;
    padding-bottom   : 13px;
    z-index          : 2;
    bottom           : 1.7em;
  }

  .autoCompleteItem {
    padding          : 4px;
    border-radius    : 2px;
  }

  .popup a {
    cursor           : pointer;
  }

  .listHandlerShow   {
    display          : block;
  }

  .listHandlerHide   {
    display          : none;
  }

  .listHandlerButtonShow {
    position         : fixed;
    width            : 46%;
  }

  .pageNumberAlignment {
    font-size        : 10px;
    float            : right;
  }

  .modalContent {
    position         : absolute;
    margin-left      : 20%;
    margin-bottom    : 32px;
    bottom           : 0px;
    padding          : 0;
    line-height      : 18px;
    font-size        : 12px;
    width            : 40%;
    box-shadow       : 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatebottom;
    -webkit-animation-duration: 0.4s;
    animation-name   : animatetop;
    animation-duration: 0.4s
  }

  @-webkit-keyframes animatetop {
    from {bottom: -300px; opacity: 0}
    to {bottom: 0; opacity: 1}
  }

  @keyframes animatetop {
    from {bottom: -300px; opacity: 0}
    to {bottom: 0; opacity: 1}
  }
`

module.exports = css