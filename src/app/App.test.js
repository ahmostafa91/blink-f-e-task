import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import SideNav from '../components/sideNav/SideNav';
import Contacts from './../components/contacts/Contacts';
import Chatbox from './../components/chatbox/ChatBox';


configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one SideNav', () => {
    expect(wrapper.find(SideNav)).toHaveLength(1);
  });

  it('should have one Contacts', () => {
    expect(wrapper.find(Contacts)).toHaveLength(1);
  });

  it('should have one Chatbox', () => {
    expect(wrapper.find(Chatbox)).toHaveLength(1);
  });
  
});
