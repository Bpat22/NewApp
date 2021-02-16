import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Tansfer = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select Account
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Checking Account</DropdownItem>
        <DropdownItem>Savings Account</DropdownItem>
        <DropdownItem>CD Account</DropdownItem>
        <DropdownItem>IRA Account</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Transfer;
