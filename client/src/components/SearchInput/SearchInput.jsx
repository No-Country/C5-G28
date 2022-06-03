import React from "react";

import { InputGroup, InputGroupText, Input } from "reactstrap";

export const SearchInput = () => {
  return (
    <form className="col-md-4 d-flex flex-row bd-highlight px-0">
      <InputGroup className="no-border">
        <InputGroupText>
        <i class="fa fa-search" aria-hidden="true"></i>
        </InputGroupText>
        <Input placeholder="Buscar Contenido..." className="search-input"/>
      </InputGroup>
    </form>
   
  );
};

export default SearchInput;
