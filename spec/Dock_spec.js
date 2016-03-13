import React from 'react';
import {renderIntoDocument} from 'react-addons-test-utils';
import {jsdom} from 'jsdom';
import Dock from '../src/ui/Dock';

describe('Dock', () => {

  // ...
  beforeEach(() => {
    global.document = jsdom("<html><body></body></html>");
    global.window = document.defaultView;
  })

  it('state changes on toggle', () => {
    const component = renderIntoDocument(<Dock />);
    expect(component.state.open).toEqual(false);
    component.handleToggle();
    expect(component.state.open).toEqual(true);
  });
});
