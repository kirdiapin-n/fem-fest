import { TextFieldProps } from "@mui/material";
import { MDEditorProps } from "@uiw/react-md-editor";

export type { Theme, ThemeOptions } from "@mui/material";

export type TNullable<T> = null | undefined | T;
export type TOptions = string[];

export type TFieldProps =
  | {
      type: "text" | "number" | "password" | "image" | "email";
    }
  | {
      type: "textarea";
      rows: number;
    }
  | ({
      type: "markdown";
    } & MDEditorProps)
  | {
      type: "autocomplete" | "multiselect";
      options: TOptions;
    };
export type TField = TFieldProps &
  TextFieldProps & { id: string; options?: TOptions; value?: TValue };
export type TValue<T = TNullable<string | string[] | number | boolean | File>> =
  TNullable<T>;
export type TData = Record<string, TValue>;

export type Author = {
  name: string;
  description: string;
  image_id: string;
};

export type Topic = {
  time: string;
  description: string;
};

export type Topics = {
  first_day?: Topic;
  second_day?: Topic;
};

export type TLector = {
  author: Author;
  topics: Topics;
};

export type Lectures = { id: string; author: Author; topic: Topic }[];
