<template>
<h2>Demo with Three Editors</h2>
<ckeditor :editor="editor" v-model="content1" :config="config" />
<br><br>
<ckeditor :editor="editor" v-model="content2" :config="config" />
<br><br>
<ckeditor :editor="editor" v-model="content3" :config="config" />
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import config from '@/CKEditorConfig.js'

export default {
  name: "DemoWithThreeEditors",
  data() {
    return {
      editor: ClassicEditor,
      config: config,
      content1: "",
      content2: "",
      content3: ""
    }
  }
}
</script>