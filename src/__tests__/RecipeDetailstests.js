import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RecipeDetails from '../RecipeDetails';

it('renders list', () => {
  const wrapper = shallow(<RecipeDetails />);
  expect(wrapper.contains("Delete")).toEqual(true);

});
