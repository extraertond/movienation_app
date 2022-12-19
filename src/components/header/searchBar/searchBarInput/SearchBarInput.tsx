import { AutocompleteRenderInputParams, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBarInput.scss";

type TextInputProps = AutocompleteRenderInputParams & {
  placeholder?: string;
};

export const SearchBarInput = ({ placeholder, ...props }: TextInputProps) => {
  return (
    <TextField
      {...props}
      placeholder={placeholder}
      size="small"
      className="text-input"
      InputProps={{
        ...props.InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon className="search-icon" />
          </InputAdornment>
        ),
      }}
    />
  );
};
