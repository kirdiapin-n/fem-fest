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

export type TAuthor = {
  name: string;
  description?: string;
  photo_url?: string;
  telegram?: string;
};

export type Topic = {
  time: string;
  description: string;
  room: string;
  day: string;
};

export type TLector = {
  hidden?: boolean;
  is_not_speaker?: boolean;
  author: TAuthor;
  second_author?: TAuthor;
  topic: Topic;
  video?: string;
};

export type TDay = "first" | "second";

export type LectureType = { id: number } & TLector;

export type TProduct = {
  product: {
    photo_url?: string;
    name: string;
    description?: string;
  };
  author_name: string;
  day: string;
  contact: {
    instagram?: string;
    facebook?: string;
    telegram?: string;
  };
};
