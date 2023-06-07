import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import HeadingPlugin from "@ckeditor/ckeditor5-heading/src/heading";
import FontSizePlugin from "@ckeditor/ckeditor5-font/src/fontsize";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import UnderlinePlugin from "@ckeditor/ckeditor5-basic-styles/src/underline";
import StrikethroughPlugin from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import FontColorPlugin from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontBackgroundColorPlugin from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import ListPlugin from "@ckeditor/ckeditor5-list/src/list";
import ListPropertiesPlugin from "@ckeditor/ckeditor5-list/src/listproperties";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import MathTypePlugin from "@wiris/mathtype-ckeditor5/src/plugin";
import RemoveFormatPlugin from "@ckeditor/ckeditor5-remove-format/src/removeformat";

export default {
  plugins: [
    EssentialsPlugin,
    HeadingPlugin,
    FontSizePlugin,
    BoldPlugin,
    ItalicPlugin,
    UnderlinePlugin,
    StrikethroughPlugin,
    FontColorPlugin,
    FontBackgroundColorPlugin,
    ListPlugin,
    ListPropertiesPlugin,
    LinkPlugin,
    MathTypePlugin,
    RemoveFormatPlugin
  ],
  toolbar: {
    items: [
      "heading",
      "fontSize",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bulletedList",
      "numberedList",
      "link",
      "MathType",
      "|",
      "removeFormat",
      "undo",
      "redo"
    ]
  }
};