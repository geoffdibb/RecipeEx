import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("clicks a button", () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();

  wrapper.find('[id="thisbutton"]').simulate("click");

  expect(wrapper).toMatchSnapshot();
});
