import React from "react";

import { InputGroup, InputGroupText, Input } from "reactstrap";

export const SearchInput = () => {
  return (
    <form className="col-md-4 d-flex flex-row bd-highlight px-0">
      <InputGroup className="no-border">
        <Input placeholder="Search..." />
        <InputGroupText>
          <i className="nc-icon nc-zoom-split" />
        </InputGroupText>
      </InputGroup>
    </form>
   
  );
};

export default SearchInput;
