import React from 'react';
import { Provider, useStore } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppContainer from './App.jsx';
import {
  apiError,
  contactsPopulate,
  contactUpdateCancel,
} from './actions/actions';
import store from './__testHelpers__/mockStore';

describe('<AppContainer />', () => {
  let state;
  beforeEach(() => {
    state = store.getState();
  });

  it('should render correctly & dispatch contents populate', () => {
    const component = mount(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should correctly fetch all contacts', () => {});
  it('should handle when contact fetch fails', () => {});
  it('should render correctly if detailsView is true', () => {});
  it('should render the loading spinner if isLoading is true', () => {});
  it('should dispatch contentsUpdateCancel on header button onClick', () => {});
});
