import React, { Component } from 'react';
import './menu.css';

class MenuWindow extends Component {
    constructor(props) {
        super(props);
        this.showHelp = true;
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        if (!this.currentNode) {
            this.currentNode = document.getElementById(this.props.id);
        }
        this.currentNode.style.visibility = 'hidden';
    }

    render() {
        return (
            <div class="menu-splash-screen" id={this.props.id}

                onClick={this.handleClick}

            >

                <div class="menu-window-base"  >

                    <div class="menu-window-Bubble">

                        <div class="menu-table">
                            <div class="menu-table-Body">
                                {this.props.MenuList.map(item => (
                                    <div class="menu-table-Row">
                                        <div class="menu-table-Cell">
                                            <svg fill="#000000" viewBox="0 0 24 24" width="18px" height="18px"><path d={item.svg}
                                            /></svg>&nbsp;
                                            <span class="menu-table-center">
                                                {item.title}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div></div>

            </div>
        )
    }
};

export default MenuWindow;
