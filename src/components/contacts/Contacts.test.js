import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Contacts from './Contacts';
import NavButton from '../../commons/navButton/NavButton';



configure({ adapter: new Adapter() });

describe('<Contacts />', () => {
  const wrapper = shallow(<Contacts />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one NavButton', () => {
    expect(wrapper.find(NavButton)).toHaveLength(1);
  });

  it('should have one ul', () => {
    expect(wrapper.find("ul")).toHaveLength(1);
  });
  
});
