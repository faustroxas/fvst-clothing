import React from 'react';
import MenuItem from '../menu-item/menu-item-component';
import DIRECTORY_DATA from './directory-data/directory-data';

import './menu-directory-styles.scss';

export class MenuDirectory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: DIRECTORY_DATA
        }
    }

    render () {
        return (
            <div className="menu-directory">
                { 
                  this.state.sections.map(({ id, ...otherSectionProps}) =>
                      <MenuItem 
                          key={id}
                          {...otherSectionProps}
                      />
                  )
                }
            </div>
        )
    }
}