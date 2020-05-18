import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, IconHeader} from './style';

const menuIcon = require('../../../assets/icons/menu.png');
const searchIcon = require('../../../assets/icons/search.png');

const Header = () => {
  return (
    <Container>
      <TouchableOpacity>
        <IconHeader source={menuIcon} />
      </TouchableOpacity>

      <TouchableOpacity>
        <IconHeader source={searchIcon} />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
