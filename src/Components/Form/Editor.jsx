import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Input.css";
//
export default function Editor(props) {
   return (
      <div className="editor">
         <h2>{props.content}</h2>
         <CKEditor
            config={{
               placeholder: props.placeholder,
            }}
            editor={ClassicEditor}
            data={props.articleBody}
            onChange={(event, editor) => {
               const data = editor.getData();
               props.setArticleBody(data);
            }}
         />
      </div>
   );
}
