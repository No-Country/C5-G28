import React from "react";

import { InputGroup, InputGroupText, Input } from "reactstrap";

export const SearchInput = () => {
  return (
    <form className="col-md-4 d-flex flex-row bd-highlight px-0">
      <InputGroup className="no-border">
        <Input placeholder="Search..." />
<<<<<<< HEAD
        <InputGroupText>
          <i className="nc-icon nc-zoom-split" />
        </InputGroupText>
=======
          <InputGroupText>
            <i className="nc-icon nc-zoom-split" />
          </InputGroupText>
>>>>>>> e7db3dbac6a4daa5ee3cb8c35c89606c6892bdde
      </InputGroup>
    </form>
   
  );
};

export default SearchInput;
