import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import SideNav from './SideNav';
import NavButton from '../../commons/navButton/NavButton';



configure({ adapter: new Adapter() });

describe('<SideNav />', () => {
  const wrapper = shallow(<SideNav />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have four NavButton', () => {
    expect(wrapper.find(NavButton)).toHaveLength(4);
  });

  it('SideNav should have children', () => {
    expect(wrapper.props().children).not.toEqual(null);
  });
  
});
