import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Chatbox from './ChatBox';
import NavButton from '../../commons/navButton/NavButton';
import EventCard from '../../commons/card/eventCard/EventCard';
import Card from './../../commons/card/chatCard/Card';
import ChatButton from './../../commons/chatButton/ChatButton';



configure({ adapter: new Adapter() });

describe('<Chatbox />', () => {
  const wrapper = shallow(<Chatbox />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one NavButton', () => {
    expect(wrapper.find(NavButton)).toHaveLength(3);
  });

  it('should have one EventCard', () => {
    expect(wrapper.find(EventCard)).toHaveLength(1);
  });

  it('should have two Card', () => {
    expect(wrapper.find(Card)).toHaveLength(2);
  });

  it('should have one ChatButton', () => {
    expect(wrapper.find(ChatButton)).toHaveLength(1);
  });
  
});
